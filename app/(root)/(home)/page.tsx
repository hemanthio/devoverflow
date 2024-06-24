import Filter from "@/components/shared/Filter";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HomePageFilters } from "@/constants/filters";
import HomeFilters from "@/components/home/HomeFilters";
import QuestionCard from "@/components/cards/QuestionCard";
import NoResult from "@/components/shared/NoResult";

const questions = [
  {
    _id: "1",
    title: "How to learn TypeScript?",
    tags: [
      { _id: "101", name: "TypeScript" },
      { _id: "102", name: "Programming" }
    ],
    author: {
      _id: "201",
      name: "John Doe",
      picture: "https://example.com/johndoe.jpg"
    },
    upvotes: 10,
    views: 150,
    answers: [
      { answer: "You can start by reading the TypeScript documentation." },
      { answer: "Practice by converting your JavaScript projects to TypeScript." }
    ],
    createdAt: new Date('2023-01-01T10:00:00Z')
  },
  {
    _id: "2",
    title: "What is the best way to manage state in React?",
    tags: [
      { _id: "103", name: "React" },
      { _id: "104", name: "State Management" }
    ],
    author: {
      _id: "202",
      name: "Jane Smith",
      picture: "https://example.com/janesmith.jpg"
    },
    upvotes: 25,
    views: 300,
    answers: [
      { answer: "You can use Redux for complex state management." },
      { answer: "Context API is good for simpler state management needs." }
    ],
    createdAt: new Date('2023-02-15T14:30:00Z')
  },
  {
    _id: "3",
    title: "How to optimize web performance?",
    tags: [
      { _id: "105", name: "Web Performance" },
      { _id: "106", name: "Optimization" }
    ],
    author: {
      _id: "203",
      name: "Alice Johnson",
      picture: "https://example.com/alicejohnson.jpg"
    },
    upvotes: 40,
    views: 500700,
    answers: [
      { answer: "Use lazy loading for images." },
      { answer: "Minimize the use of external scripts." }
    ],
    createdAt: new Date('2024-03-10T09:45:00Z')
  }
];


export default function Home(){
  return (
    <div className=" flex flex-col gap-4 max-sm:flex max-sm:flex-col max-sm:gap-1">
      <div className="flex justify-between  max-sm:flex">
     <h1 className="h1-bold text-dark100_light900">All questions </h1>
     <Link href='/ask-question' className="">
    <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900  ">
      Ask a question
    </Button>
     </Link>
     </div>

<div className="mt-6 flex  items-center justify-between gap-5 max-sm:flex sm:items-center">
  <LocalSearchbar
  route='/'
  iconPosition='right'
  imgSrc='/assets/icons/search.svg'
  placeholder='Search questions'
  otherClasses='flex-1 '
  />

  <Filter
  filters={HomePageFilters}
  otherClasses='min-h-[56px] sm:min-w-[170px] '
  containerClasses ='hidden max-md:flex'
  />
</div>

<HomeFilters />


<div className="mt-10 flex w-full flex-col gap-6">
  {questions.length>0 ? 
  questions.map((question)=>(
    <QuestionCard 
    key={question._id}
   _id={question._id}
   title={question.title}
   tags={question.tags}
   author={question.author}
   upvotes={question.upvotes}
   views={question.views}
   answers={question.answers}
   createdAt={question.createdAt}



    />
  )) :
  <NoResult 
 title='there is no question to show '
 description='be the first to break the silence. Ask a Question and kickstart the discussion . our query could be next big thing other learn from.Get involved' 
 link='/ask-question'
 linkTitle='Ask a question'
  />}
</div>


    </div>
  )
}