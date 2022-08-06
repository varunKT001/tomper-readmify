import { createStandaloneToast } from '@chakra-ui/react';

const { ToastContainer, toast: chakraToast } = createStandaloneToast();

export class Toast {
  static success(message: string) {
    chakraToast({
      description: message,
      status: 'success',
      position: 'top',
      isClosable: true,
    });
  }

  static error(message: string) {
    chakraToast({
      description: message,
      status: 'error',
      position: 'top',
      isClosable: true,
    });
  }

  static info(message: string) {
    chakraToast({
      description: message,
      status: 'info',
      position: 'top',
      isClosable: true,
    });
  }
}

export { ToastContainer };
