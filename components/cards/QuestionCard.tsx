import Link from 'next/link';
import React from 'react'
import RenderTag from '../shared/RenderTag';
import Metric from '../shared/Metric';
import { formatAndDivideNumber, getTimestamp } from '@/lib/utils';

interface QuestionProps{
  _id:string;
  title:string;
  tags:{
    _id:string;
    name:string;
  }[];
  author:{
    _id:string;
    name:string;
    picture:string;
  };
upvotes:number;
views:number;
answers:Array<object>;
createdAt:Date;

  }
  



const QuestionCard = ({
  _id,
  title,
  tags,
  author,
  upvotes,
  views,
  answers,
  createdAt
}:QuestionProps) => {
  return (
   <>
   <div className='card-wrapper rounded-[10px]  p-9 sm:px-11 '>
<div className='justify-bewteen flex flex-col-reverse items-start gap-5 sm:flex-row'>
<div>
  <span className='subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden'>
    {getTimestamp(createdAt)}
  </span>
 <Link href={`/question/${_id}`} >
 <h3 className='sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1 flex-1 '>
  {title}
 </h3>
 </Link>
</div>

{/* if signed in add edit delete actions */}
</div>

<div className='mt-3.5 flex flex-wrap gap-2 '>
  {tags.map((tag)=>{
    return <RenderTag  key={tag._id} name={tag.name} _id={tag._id}/>;
  })}
</div>
  
<div className='flex-between mt-6 w-full flex-wrap gap-3'>
  <Metric 
  imgUrl="/assets/icons/avatar.svg"
  alt="user" 
  title={` -asked ${getTimestamp(createdAt)}`}
  href={`/profile/${author._id}`}
  value={author.name}
  isAuthor
  textStyles ="body-medium text-dark400_light800"
  />

<Metric 
  imgUrl="/assets/icons/like.svg"
  alt="upvotes" 
  title="Votes"
  value={formatAndDivideNumber(upvotes)}
  textStyles ="small-medium text-dark400_light800"
  />

<Metric 
  imgUrl="/assets/icons/message.svg"
  alt="message" 
  title="Answers"
  value={formatAndDivideNumber(answers.length)}
  textStyles ="small-medium text-dark400_light800"
  />


<Metric 
  imgUrl="/assets/icons/eye.svg"
  alt="eye" 
  title="Views"
  value={formatAndDivideNumber(views)}
  textStyles ="small-medium text-dark400_light800"
  />

</div>

   </div>
   </>
  )
}

export default QuestionCard