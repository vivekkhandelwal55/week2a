export default function TabItem({ onPress, selectedClass, value }) {
    return <div className={selectedClass} onClick={() => onPress()}>{value}</div>
}