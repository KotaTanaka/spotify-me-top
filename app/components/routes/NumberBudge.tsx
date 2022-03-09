interface INumberBudge {
  number: number;
}

const NumberBudge: React.FC<INumberBudge> = (props) => {
  const { number } = props;

  return (
    <div className="flex justify-center items-center w-8">
      <span className="font-bold daisy-badge daisy-badge-lg daisy-badge-outline daisy-badge-primary">
        {number}
      </span>
    </div>
  );
};

export default NumberBudge;
