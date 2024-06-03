import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { useEffect, useState } from "react";
import { HiEnvelope } from "react-icons/hi2";

type SignUpConfirmEmailDialogProps = { isOpen: boolean };

export const SignUpConfirmEmailDialog = ({
  isOpen: propsIsOpen,
}: SignUpConfirmEmailDialogProps) => {
  // --- STATE ---

  const [isOpen, setIsOpen] = useState(propsIsOpen);

  // --- EFFECTS ---

  useEffect(() => {
    setIsOpen(propsIsOpen);
  }, [propsIsOpen]);

  // --- RENDER ---

  return (
    <Transition show={isOpen}>
      <Dialog className="relative z-10" onClose={setIsOpen}>
        <TransitionChild
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-neutral-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <TransitionChild
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <div>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100">
                    <HiEnvelope
                      className="h-6 w-6 text-neutral-600"
                      aria-hidden="true"
                    />
                  </div>

                  <div className="mt-3 text-center sm:mt-5">
                    <DialogTitle
                      as="h3"
                      className="text-base font-semibold leading-6 text-neutral-900"
                    >
                      Confirm your email
                    </DialogTitle>

                    <div className="mt-2">
                      <p className="text-sm text-neutral-500">
                        We've sent you an email. Please click in the link to
                        confirm your email address and login.
                      </p>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
