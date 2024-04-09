/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { IProduct, Inputs } from "../../interface/product";

type Useproductmutation = {
  actions: "CREATE" | "UPDATE" | "DELETE";
  onSuccess?: () => void;
};

const UseproductMutation = ({ actions, onSuccess }: Useproductmutation) => {
  const uploadManyFiles = async (files: FileList) => {
    const CLOUD_NAME = "dciwglxbc";
    const PRESET_NAME = "uploadFile";
    const FOLDER_NAME = "Project-xuong";
    const urls = [];

    try {
      for (const file of files) {
        const formData = new FormData();
        formData.append("upload_preset", PRESET_NAME);
        formData.append("folder", FOLDER_NAME);
        formData.append("file", file);

        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        if (response.status === 200) {
          urls.push(response.data.secure_url);
        } else {
          console.error("Upload failed:", response.data.message);
        }
      }
    } catch (error) {
      console.error("Upload error:", error);
    }
    return urls;
  };

  const uploadThumbnail = async (file: File) => {
    const CLOUD_NAME = "dciwglxbc";
    const PRESET_NAME = "uploadFile";
    const FOLDER_NAME = "Project-xuong";
    let thumbnailUrl = "";

    try {
      const formData = new FormData();
      formData.append("upload_preset", PRESET_NAME);
      formData.append("folder", FOLDER_NAME);
      formData.append("file", file);

      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        thumbnailUrl = response.data.secure_url;
        console.log("Thumbnail uploaded successfully:", thumbnailUrl);
      } else {
        console.error("Thumbnail upload failed:", response.data.message);
      }
    } catch (error) {
      console.error("Thumbnail upload error:", error);
    }

    return thumbnailUrl;
  };
  const { mutate, ...rest } = useMutation({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mutationFn: async (product: IProduct) => {
      switch (actions) {
        case "CREATE":
          await axios.post(`http://localhost:3000/products/add`, product);
          break;
        case "UPDATE":
          await axios.put(
            `http://localhost:3000/products/update/${product._id}`,
            product
          );
          break;
        case "DELETE":
          await axios.delete(
            `http://localhost:3000/products/delete/${product}`
          );
          break;
        default:
          return null;
      }
    },
    onSuccess: () => {
      onSuccess && onSuccess();
    },
  });

  const form = useForm<Inputs>();

  const onSubmit: SubmitHandler<IProduct> = async (product) => {
    console.log(product);
    const fileInput = document.getElementById(
      "fileInput"
    ) as HTMLInputElement | null;
    const thumbnailInput = document.getElementById(
      "thumbnailInput"
    ) as HTMLInputElement | null;
    const files: FileList | null = fileInput ? fileInput.files : null;
    const thumbnailFile: File | null =
      thumbnailInput && thumbnailInput.files ? thumbnailInput.files[0] : null;

    if (!files || files.length === 0 || !thumbnailFile) {
      throw new Error("Please select files and thumbnail");
    }
    const uploadedUrls = await uploadManyFiles(files);
    const thumbnailUrl = await uploadThumbnail(thumbnailFile);
    // Thêm các URL hình ảnh và thumbnail vào đối tượng product
    product.imgPro = uploadedUrls;
    product.thumbnail = thumbnailUrl;

    // Gửi dữ liệu sản phẩm với thumbnail lên server
    mutate(product);
  };

  return { form, mutate, onSubmit, uploadThumbnail, uploadManyFiles, ...rest };
};

export default UseproductMutation;
