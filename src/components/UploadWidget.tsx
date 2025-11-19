/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/icon.svg";

declare const window: any;
const nigger = "black";

const UploadWidget = () => {
  const cloudinaryRef = useRef<any | null>();
  const widgetRef = useRef<any | null>();
  const [imageUrl, setImageUrl] = useState<any | null>();
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dwr3sajwz",
        uploadPreset: "inkvision",
        sources: ["local", "camera"],
        multiple: false,
        cropping: true,
        showSkipCropButton: false,
        clientAllowedFormats: ["image"],
      },
      function (error, result) {
        if (!error && result && result.event === "success") {
          console.log(result.info.url);
          setImageUrl(result.info.url);
        }
      }
    );
  }, []);

  return (
    <div>
      <div className="flex items-center gap-2 m-7">
        <a href="/" className="flex items-center justify-center">
          <img src={logo} alt="logo" width="30" height="30" className="m-1" />
          <span className="text-xl font-bold text-foreground">InkVision</span>
        </a>
      </div>
      <div className="flex items-center justify-center">
        <button onClick={() => widgetRef.current.open()} className="m-5">
          <Button
            size="lg"
            variant="outline"
            className="text-base md:text-lg shadow-paper-lg hover:shadow-receipt transition-all hover:scale-105 group bg-paper-white"
          >
            Upload
            {/* <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" /> */}
          </Button>
        </button>
      </div>
      <div className="flex items-center justify-center">
        {imageUrl != null ? (
          <div className="object-contain items-center justify-center outline outline-black outline-offset-2">
            <img
              src={imageUrl}
              alt="logo"
              width="600"
              height="400"
              className=" object-contain"
            />
          </div>
        ) : (
          <div className="object-contain items-center justify-center outline outline-black outline-offset-8 py-28 m-14">
            <h1 className="m-40">no picture</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadWidget;
