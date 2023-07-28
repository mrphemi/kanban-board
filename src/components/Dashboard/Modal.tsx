import * as DialogPrimitive from "@radix-ui/react-dialog";

interface ModalProps extends DialogPrimitive.DialogContentProps {
    isOpen?: boolean;
}

const Modal = ({ children, onInteractOutside, isOpen }: ModalProps) => {
    return (
        <DialogPrimitive.Root open={isOpen ?? true}>
            <DialogPrimitive.Portal>
                <DialogPrimitive.Overlay className="bg-black/50 fixed z-20 inset-0 transition-all duration-100 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:animate-in data-[state=open]:fade-in" />
                <DialogPrimitive.Content
                    className="bg-white dark:bg-kb-black-tertiary px-6 pt-6 pb-8 md:p-8 fixed z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 max-w-[480px] max-h-[523px] overflow-scroll rounded-lg outline-none"
                    onInteractOutside={onInteractOutside}
                >
                    {children}
                </DialogPrimitive.Content>
            </DialogPrimitive.Portal>
        </DialogPrimitive.Root>
    );
};

Modal.Title = DialogPrimitive.Title;

export default Modal;
