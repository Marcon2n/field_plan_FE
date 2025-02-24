import { Button } from "./button";

export function PollItem({ pollData, onVote = (id, optionIndex) => {} }) {
  return (
    <div className="flex flex-col gap-y-2 my-2 pr-2">
      <div className="border rounded-[3px] p-2 bg-gray-300 font-medium">
        Q: {pollData.question}
      </div>
      <div className="flex flex-col gap-y-1">
        {pollData.options.map((item, index) => (
          <div className="max-w-[300px]">
            <Button key={index} onClick={() => onVote(pollData.id, index)}>
              <div className="flex flex-row items-center gap-x-2">
                <div>{item.voteOption}</div>
                <div>{"(" + item.voteCount + " bình chọn" + ")"}</div>
              </div>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
