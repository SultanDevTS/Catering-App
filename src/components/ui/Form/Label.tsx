import type React from "react"


interface LabelProps {
  content?: string,
  className?:string
}
export const Label : React.FC<LabelProps> = ({content, className}) => {
 return (

    <label htmlFor="" className={`block text-sm font-medium text-gray-700 mb-2 ${className}`}>{content}</label>
  )
}
