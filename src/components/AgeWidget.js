import React,{useState} from 'react'

function AgeWidget(props) {
    // const [selectedAge, setSelectedAge] = useState(0);
    const [selectedAge,setSelectedAge] = useState('');

  const ageOptions = Array.from({ length: 100 }, (_, index) => index + 1); 

  const handleAgeChange = (event) => {
    const age = event.target.value;
    setSelectedAge(age);
    props.state.userData.age = age;
    props.actions.afterage(age);
  };

  return (
    <div>
    <label htmlFor="ageDropdown">Select Age:</label>
    <select id="ageDropdown" value={selectedAge} onChange={handleAgeChange}>
      <option value="">Select</option>
      {ageOptions.map((age) => (
        <option key={age} value={age}>
          {age}
        </option>
      ))}
    </select>
    {selectedAge && <p>Selected Age: {selectedAge}</p>}
  </div>
  );
};

export default AgeWidget;
