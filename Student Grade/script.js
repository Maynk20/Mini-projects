document.getElementById("btn").addEventListener("click", () => {
          const sub1 = Number(document.getElementById("stu1").value);
          const sub2 = Number(document.getElementById("stu2").value);
          const sub3 = Number(document.getElementById("stu3").value);
          const sub4 = Number(document.getElementById("stu4").value);
          const sub5 = Number(document.getElementById("stu5").value);

          const table = document.getElementById("table");

          let gradeElement = "";
          const percentage = Math.floor(((sub1 + sub2 + sub3 + sub4 + sub5) / 500 ) * 100);

          //Grade 
          if (percentage >= 95){
                    gradeElement = `A+`;
          }
          else if(percentage >= 90){
                    gradeElement = `A`;
          }
          else if(percentage >= 85){
                    gradeElement = `B`;
          }
          else if(percentage >= 80){
                    gradeElement = `B+`;
          }
          else if(percentage >= 70){
                    gradeElement = `C`;
          }
          else if(percentage >= 60){
                    gradeElement = `D`;
          }
          else if (percentage < 45){
                    gradeElement = `Fail!`
          }
          else{
                    gradeElement = `Please Enter correct Number!`;
          }

          table.innerHTML = `
          <table border="1">
          <tr><th>Grade:</th> <td>${gradeElement}</td></tr>
          <tr><th>Percentage:</th> <td>${percentage}%</td></tr>
          </table>
          `
})