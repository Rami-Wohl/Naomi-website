import Image from "next/image";

interface CircularImageProps {
  src: string;
  alt: string;
  size?: number;
}

const CircularImage: React.FC<CircularImageProps> = ({
  src,
  alt,
  size = 150,
}) => {
  return (
    <div
      className="relative overflow-hidden rounded-full border-2 border-gray-300 shadow-md hover:scale-110 hover:shadow-lg"
      style={{ width: size, height: size }}
    >
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
};

export default CircularImage;
