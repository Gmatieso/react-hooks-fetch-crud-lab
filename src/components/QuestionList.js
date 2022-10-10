import React, {useEffect , useState} from "react";
import QuestionItem from "./QuestionItem"

function QuestionList() {
  const [questions,setQuestions] = useState([])

  useEffect(() =>{
    fetch("http://localhost:4000/questions")
    .then(res => res.json())
    .then(questions => setQuestions(questions))
  },[])

  //implementing handle Delete click 

  function handleDeleteClick(id){
    fetch(`http://localhost:4000/questions/${id}`,{
        method: "DELETE",
    })
    .then((r) => r.json())
    .then(()=>{
      const updateQuizList = questions.filter((q)=>q.id !== id)
      setQuestions(updateQuizList)
    })
  }


  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{/* display QuestionItem components here after fetching */}</ul>
    </section>
  );
}

export default QuestionList;
