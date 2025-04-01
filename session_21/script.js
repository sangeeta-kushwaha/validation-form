document.querySelector(".submitForm").addEventListener("click", (event)=>{
    event.preventDefault();

const userName = document.getElementById("userName").value.trim();
const userEmail = document.getElementById("userEmail").value.trim();
const userNumber =document.getElementById("userNumber").value.trim();
const userPassword = document.getElementById("userPassword").value.trim();
const userDOB = document.getElementById("userDOB").value;
const userAddress =document.getElementById("userAddress").value.trim();

let valid = true;    
let namePattern = /^[A-Za-z]{3,}$/;
            if (!namePattern.test(userName)) {
                document.getElementById("userNameError").innerText = "Name must be at least 3 letters.";
                valid = false;
            } else {
                document.getElementById("userNameError").innerText = "";
                console.log(userName)
            };

//email
            let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailPattern.test(userEmail)) {
                document.getElementById("userEmailError").innerText = "Invalid email format.";
                valid = false;
            } else {
                document.getElementById("userEmailError").innerText = "";
                console.log(userEmail)
            };
// phone
            let phonePattern = /^[987][0-9]{9}$/;
            if (!phonePattern.test(userNumber)) {
                document.getElementById("userPhoneNoError").innerText ="Phone must be 10 digits & start with 9, 8, or 7.";
                valid = false;
            } else {
                document.getElementById("userPhoneNoError").innerText = "";
                console.log(userNumber)
            }
            
            //password
            let passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
            if (!passwordPattern.test(userPassword)) {
                document.getElementById("userPasswordError").innerText = "Password must be at least 8 chars, 1 uppercase, 1 number, 1 special char.";
                valid = false;
            } else {
                document.getElementById("userPasswordError").innerText = "";
                console.log(userPassword)
            };



            //dob
            let dobDate = new Date(userDOB);
            let today = new Date();
            let age = today.getFullYear() - dobDate.getFullYear();
            let monthDiff = today.getMonth() - dobDate.getMonth();
            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dobDate.getDate())) {
                age--;
            }
            if (age < 17) {
                document.getElementById("userDOBError").innerText = "Student must be at least 17 years old.";
                valid = false;
            } else {
                document.getElementById("userDOBError").innerText = "";
                console.log(age)
            }


            //address
            if (userAddress === "") {
                document.getElementById("userAddressError").innerText = "Address is required.";
                valid = false;
            } else {
                document.getElementById("userAddressError").innerText = "";
                console.log(userAddress)
            }
            


          //gender
          let gender = document.querySelector('input[name="gender"]:checked');
          if (!gender) {
            document.getElementById("genderError").innerText = "Please select your gender.";
            valid = false;
        } else {
            document.getElementById("genderError").innerText = "";
            console.log(gender)
        }


        //cousre
        let course = document.getElementById("course").value;
            if (course === "") {
                document.getElementById("courseError").innerText = "Please select a course.";
                valid = false;
            } else {
                document.getElementById("courseError").innerText = "";
                console.log(course)
            }

            //agreement
            const agreement = document.getElementById("agreement").checked
            if (!agreement) {
                document.getElementById("userAgreementError").innerText = "You must accept the Terms & Conditions.";
                valid = false;
            } else {
                document.getElementById("userAgreementError").innerText = "";
                console.log(agreement)
            }


            if (valid) {
                alert("Form submitted successfully!");
                document.getElementById("formvalidation").reset();
            }
            
})




