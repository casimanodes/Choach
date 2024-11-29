import { useState, ChangeEvent, FormEvent, useEffect } from 'react';

export default function ImageUpload() {
  const [image, setImage] = useState<File | null>(null);
  const [message, setMessage] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [uploadedImageSrc, setUploadedImageSrc] = useState('');
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!isClient) return;

    if (e.target.files && e.target.files[0]) {
      const selectedImage = e.target.files[0];
      setImage(selectedImage);

      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImage(event.target?.result as string);
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  const handleMessageChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!image) {
      setResponseMessage('Please select an image first.');
      return;
    }

    const formData = new FormData();
    formData.append('image', image);
    formData.append('message', message);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Failed to upload image and message: ${response.statusText}`);
      }

      const result = await response.json();
      setResponseMessage(`Image and message uploaded successfully. Document ID: ${result.id}`);
      setUploadedImageSrc(result.imageSrc);
    } catch (error) {
      setResponseMessage((error as Error).message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="imageUpload">Upload Image:</label>
        <input id="imageUpload" type="file" accept="image/*" onChange={handleImageChange} />
        <input
          type="text"
          placeholder="Enter a message"
          value={message}
          onChange={handleMessageChange}
        />
        <button type="submit">Upload Image and Message</button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
      {uploadedImageSrc && (
        <div>
          <h3>Uploaded Image:</h3>
          <img src={uploadedImageSrc} alt="Uploaded" />
        </div>
      )}
      {uploadedImage && (
        <div>
          <h3>Your img</h3>
          <img src={uploadedImage} alt="Uploaded progress" className="w-full h-auto mt-2" />
        </div>
      )}
    </div>
  );
}
