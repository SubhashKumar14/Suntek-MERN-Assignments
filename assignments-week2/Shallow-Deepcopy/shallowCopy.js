/*Hands-On 1: Shallow Copy (Controlled Mutation Use Case)
-------------------------------------------------------
🧪 Given Data:
              const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };

🎯 Task
    1. Create a shallow copy of user
    2. Change:
          i. name in the copied object
          ii. preferences.theme in the copied object
          iii .Log both original and copied objects
          iv. Observe what changes and what doesn’t*/

const user = {
    id: 101,
    name: "Ravi",
    preferences: {
        theme: "dark",
        language: "en",
        },
};

//creating shallow copy of user object
const copiedUser={...user};

//modifying name in copied object
copiedUser.name="Subhash";

//modifying preferences.theme in copied object
copiedUser.preferences.theme="light";

//logging both original and copied objects
console.log("Original User Object:",user);
console.log("Copied User Object:",copiedUser);

/*Observation:
1. The name property in the original user object remains "Ravi" while in the copiedUser object it is changed to "Subhash".
This shows that primitive properties are copied by value.
2. The preferences.theme property in both the original user object and the copiedUser object is changed to "light".
This shows that nested objects are copied by reference in a shallow copy.
changes to nested objects in the copied object reflect in the original object as well.
*/