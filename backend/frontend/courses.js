//  tl.from(".top", {
//         y: -30,
//         opacity: 0,
//         duration: 2,
//     });
document.addEventListener('DOMContentLoaded', () => {
    const addCareerGoalBtn = document.getElementById('addCareerGoal');
    const careerGoalsContainer = document.getElementById('career-goals-container');
    const profileForm = document.getElementById('profileForm');
    //const recommendationsContainer = document.getElementById('recommendations');
    const recommendationsContainer = document.getElementById("recommendations");

    // Function to create a new career goal input field
    const createCareerGoalInput = () => {
        const inputWrapper = document.createElement('div');
        inputWrapper.classList.add('form-control');

        const input = document.createElement('input');
        input.type = 'text';
        input.name = 'careerGoal';
        input.placeholder = 'e.g., Software Engineer';

        inputWrapper.appendChild(input);
        careerGoalsContainer.appendChild(inputWrapper);
    };

    // Add a new career goal input when the button is clicked
    addCareerGoalBtn.addEventListener('click', () => {
        createCareerGoalInput();
    });

    // Handle form submission
    profileForm.addEventListener('submit', async(event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        // Gather all form data
        const formData = new FormData(profileForm);
        const data = {};
        
        // Handle normal inputs
        formData.forEach((value, key) => {
            if (!data[key]) {
                data[key] = value;
            } else {
                // Handle multiple career goal inputs
                if (Array.isArray(data[key])) {
                    data[key].push(value);
                } else {
                    data[key] = [data[key], value];
                }
            }
        });

        // Handle checkboxes
        const interests = [];
        document.querySelectorAll('input[name="interests"]:checked').forEach(checkbox => {
            interests.push(checkbox.value);
        });
        data.interests = interests;

        // Log the collected data to the console for demonstration
        //console.log('Form data submitted:', data);
        //alert('Form submitted! Check the console for data.');
        // try {
        //     const response = await fetch("/recommend-colleges", {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json"
        //         },
        //         body: JSON.stringify(data)   // send collected form data
        //     });

        //     const result = await response.json();
        //     console.log("Recommended Colleges:", result.recommendations);

    // Show recommendations dynamically on page
        //     let container = document.createElement("div");
        //     container.innerHTML = "<h3>Recommended Colleges</h3>";
        //     result.recommendations.forEach(college => {
        //         let p = document.createElement("p");
        //         p.textContent = `${college.name} (${college.field}) - Rank ${college.rank}`;
        //         container.appendChild(p);
        //     });
        //     document.body.appendChild(container);

        // } catch (error) {
        //     console.error("Error sending data:", error);
        // }
        try {
            const response = await fetch("/recommendations", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });

            const result = await response.json();
            console.log("Recommended Colleges:", result.recommendations);

    // Clear old results
        //     // ✅ Save recommendations in localStorage
            localStorage.setItem("recommendations", JSON.stringify(result.recommendations));

            // ✅ Redirect to new page
            window.location.href = "recommendations.html";

        } catch (error) {
            console.error("Error sending data:", error);
        }
        
    });
});
