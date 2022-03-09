interface IJacketImageProps {
  src: string;
  alt: string;
}

const JacketImage: React.FC<IJacketImageProps> = (props) => {
  const { src, alt } = props;

  return <img className="object-cover ml-4 w-32 h-32" src={src} alt={alt} />;
};

export default JacketImage;
