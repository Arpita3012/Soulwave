import { openUploadWidget } from "../../utils/CloudinaryService";
import { cloudinary_upload_preset } from "../../config";

const CloudinaryUpload = ({ setUrl, setName }) => {
    const uploadImageWidget = () => {
        const myUploadWidget = openUploadWidget(
            {
                cloudName: "dcx5regld",
                uploadPreset: cloudinary_upload_preset,
                sources: ["local"],
                resourceType: "video", // ✅ CRITICAL for .mp3/.wav files
                multiple: false,
                clientAllowedFormats: ["mp3", "wav", "ogg"],
            },
            (error, result) => {
                if (!error && result.event === "success") {
                    console.log("Upload Success ✅", result.info);
                    setUrl(result.info.secure_url);
                    setName(result.info.original_filename);
                } else {
                    console.error("Upload Error ❌", error);
                }
            }
        );

        myUploadWidget.open();
    };

    return (
        <button
            className="bg-white rounded-full p-4 font-semibold"
            onClick={uploadImageWidget}
        >
            Select Track
        </button>
    );
};

export default CloudinaryUpload;
