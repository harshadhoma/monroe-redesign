// /UploadPhoto.tsx
import React, { useState } from "react";

export default function UploadPhoto() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [caption, setCaption] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedFile) return alert("Please select a photo!");

    const reader = new FileReader();
    reader.onloadend = () => {
      const imageUrl = reader.result as string;

      const newPhoto = {
        url: imageUrl,
        caption,
      };

      const existing = JSON.parse(localStorage.getItem("galleryPhotos") || "[]");
      localStorage.setItem("galleryPhotos", JSON.stringify([newPhoto, ...existing]));

      setCaption("");
      setSelectedFile(null);
      alert("Photo uploaded!");
    };
    reader.readAsDataURL(selectedFile);
  };

  return (
    <div className="max-w-xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold text-purple-800 mb-4">📤 Upload Your Memory</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
          className="block w-full"
        />
        <input
          type="text"
          placeholder="Caption (optional)"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
        />
        <button type="submit" className="bg-purple-700 text-white px-4 py-2 rounded">
          Upload
        </button>
      </form>
    </div>
  );
}
