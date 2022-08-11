const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input',function(){
    output.textContent = salary.value;
});



    // <div>
    //         <label for="salary" class="col-25">Choose your salary: </label>
    //         <input class="col-74" type="range" name="salary" id="salary" min="30000" max="50000" step="100" value="40000">
    //         <output class="salary-output" for="salary">40000</output>
    //     </div>