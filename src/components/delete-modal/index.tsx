import Modal from '@/components/modal'
import Button from '@/components/button'

interface DeleteModalProps {
  handleDelete: (id: string) => void
  onHide: () => void
  title: string
  entityName: string
  entityId: string
}

export default function DeleteModal({
  handleDelete,
  onHide,
  title,
  entityName,
  entityId,
}: DeleteModalProps) {
  return (
    <Modal onHide={onHide} title={title}>
      <div className="flex h-40 flex-col items-center justify-center gap-6">
        <p className="text-center">
          Você tem certeza que deseja apagar <strong>{entityName}</strong>?
        </p>
        <Button.Red
          onClick={() => {
            handleDelete(entityId)
            onHide()
          }}
        >
          Apagar
        </Button.Red>
      </div>
    </Modal>
  )
}
