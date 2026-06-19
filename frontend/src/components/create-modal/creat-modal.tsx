const Input= ({
    label, value, updateValue
}: inputProps)

interface CreateModalProps {

}
export function createModal(props: CreateModalProps) {
    return (
        <div className="modal-overflow">
            <div className="modal-body">
                <form id = "form" className="form">

                </form>
            </div>
        </div>
    )
}