export default function todoGen(
    title,
    description,
    duedate,
    priority,
    notes,
    checklist
) {
    return {
        title,
        description,
        duedate,
        priority,
        notes,
        checklist,
        taskCompleted: false
    };
}