import type { Topic } from '@/types/app'

type TopicsProps = {
    topics: Topic[]
}

const Topics: React.FC<TopicsProps> = ({ topics }) => {
    return (
        <div>
            <h2 className="text-lg font-medium text-neutral-600 mb-4">Popular Topics</h2>
            <ul className="flex flex-wrap gap-2">
                {topics.map(topic => (
                    <li key={topic.id} className="bg-blue-100 px-3 py-1 rounded-full">{topic.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Topics
