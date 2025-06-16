const check = document.getElementById("btn").addEventListener("click", () => {
          const days = parseInt(document.getElementById("input").value);
          const result = document.getElementById("result");

          //days

          switch (days) {
                    case 1:
                          result.textContent = "Monday";    
                              break;

                    case 2:
                              result.textContent = "Tuesday";
                              break;
                    
                    case 3:
                              result.textContent = "Wednesday";
                              break;
                    
                    case 4:
                              result.textContent = "Thurday";
                              break;

                    case 5:
                              result.textContent = "Friday";
                              break;

                    case 6:
                              result.textContent = "Saturday";
                              break;

                    case 7:
                              result.textContent = "Sunday";
                              break;  
                    
                    default:
                              window.alert(`Please Enter Valid Day!`);
                              break;
          }
})