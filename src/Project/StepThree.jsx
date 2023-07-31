import React from "react";

const StepThree = () => {
  return (
    <div className="margin">
      <h2>How many people work at your company?</h2>
      <div className="flex">
      <div className="display">
        <div className="inline">
      <input
        type="radio"
        id="2-20 employees"
        name="fav_language"   
        value="2-20 employees"

      />
        <label for="2-20 employees">2-20 employees</label>
         </div>
      <div className="inline">
      <input
        type="radio"
        id="51-100 employees"
        name="fav_language"
        value="51-100 employees"
      />
        <label for="51-100 employees">51-100 employees</label>
      </div>
      <div className="inline">
      <input
        type="radio"
        id="201-500 employees"
        name="fav_language"
        value="201-500 employees"
      />
        <label for="201-500 employees">201-500 employees</label>
      </div>
      <div className="inline">
        <input
        type="radio"
        id="1000+ employees"
        name="fav_language"
        value="1000+ employees"
      />
        <label for="1000+ employees">1000+ employees</label>
      </div>
      </div>
      <div className="display">
        <div className="inline">
      <input
        type="radio"
        id="101-200 employees"
        name="fav_language"
        value="101-200 employees"
      />
        <label for="101-200 employees">101-200 employees</label>
</div>
      <div className="inline">
<input
        type="radio"
        id="21-50 employees"
        name="fav_language"
        value="21-50 employees"
      />
      <label for="21-50 employees">21-50 employees</label>
      </div>
    <div className="inline">

      <input
        type="radio"
        id="501-1000 employees"
        name="fav_language"
        value="501-1000 employees"
      />
        <label for="501-1000 employees">501-1000 employees</label>
      </div>
      <div className="inline">
      <input
        type="radio"
        id="It's just me"
        name="fav_language"
        value="It's just me"
      />
        <label for="It's just me">It's just me</label>
      </div>
      </div>
    </div>
    </div>
  );
};
export default StepThree;





