
interface QuestionInputProps {
  question: string;
  placeholder?: string;
}

export const QuestionInput = ({ question, placeholder }: QuestionInputProps) => {
  return (
    <div className="flex items-start gap-2">
      <div className="min-w-4 mt-1">•</div>
      <input 
        type="text" 
        className="w-full p-2 border rounded-md" 
        placeholder={placeholder || question}
      />
    </div>
  );
};
