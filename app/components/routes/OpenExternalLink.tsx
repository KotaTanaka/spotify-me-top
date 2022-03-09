interface IOpenExternalLinkProps {
  href: string;
  name: string;
}

const OpenExternalLink: React.FC<IOpenExternalLinkProps> = (props) => {
  const { href, name } = props;

  return (
    <a
      className="daisy-btn daisy-btn-sm daisy-btn-outline daisy-btn-secondary"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      Open {name}
    </a>
  );
};

export default OpenExternalLink;
