const FormSelect: React.FC = () => {
  return (
    <select className="w-full max-w-xs daisy-select daisy-select-primary">
      <option disabled selected>
        直近4週間
      </option>
      <option>直近半年間</option>
      <option>トータル</option>
    </select>
  );
};

export default FormSelect;
