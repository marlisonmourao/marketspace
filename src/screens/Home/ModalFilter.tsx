import { useState, useRef } from "react";

import {
  Button,
  Text,
  Modal,
  HStack,
  IconButton,
  Pressable,
  IPressableProps,
  Center,
  Heading,
  VStack,
  Switch,
  Box,
} from "native-base";

import { Condition } from "./Condition";
import { SecondaryButton } from "@components/SecondaryButton";
import { CheckBox } from "@components/CheckBox";


type Props = IPressableProps & {
  modalVisible: boolean;
  setModalVisible: (modalVisible: boolean) => void;
};

const paymentMethods = [
  "Boleto",
  "Pix",
  "Dinheiro",
  "Cartão de Crédito",
  "Depósito Bancário"
]

export function ModalFilter({ modalVisible, setModalVisible }: Props) {
  const [isActive, setIsActive] = useState(false);
  const [payments, setPayments] = useState<number[]>([]);
  
  const initialRef = useRef(null);
  const finalRef = useRef(null);

  function handleTogglePaymentsMethod(paymentIndex: number) {
    if(payments.includes(paymentIndex)) {
      setPayments(prevState => prevState.filter(weekDay => weekDay !== paymentIndex))
    } else {
      setPayments(prevState => [...prevState, paymentIndex]);
    }
  }

  return (
    <>
      <Modal
        isOpen={modalVisible}
        flex={1}
        justifyContent="flex-end"
        onClose={() => setModalVisible(false)}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
      >
        <Modal.Content w="full">
          <Modal.CloseButton />
          <Modal.Header>
            <Text fontFamily="heading" color="gray.100" fontSize="xl">
              Filtrar anúncios
            </Text>
          </Modal.Header>
          <Modal.Body>
            <Text fontFamily="heading" color="gray.200" fontSize="md">
              Condição
            </Text>

            <HStack mt={3}>
              <Condition
                isActive={!isActive}
                setIsActive={() => setIsActive(!isActive)}
              />

              <Condition
                isActive={isActive}
                setIsActive={() => setIsActive(!isActive)}
              />
            </HStack>

    			<VStack alignItems="flex-start" mt={6}>
						<Text color="gray.200" fontFamily="heading" fontSize="sm">
							Aceita troca?
						</Text>

						<Switch size="lg" p={0} onChange={() => {}} />
					</VStack>

					<Text color="gray.200" fontFamily="heading" fontSize="sm" mt={2}>
						Meios de pagamento aceitos
					</Text>

          {
            paymentMethods.map((payment, index) => (
              <CheckBox 
                key={payment}
                title={payment}
                checked={payments.includes(index)}
                onPress={() => handleTogglePaymentsMethod(index)}
              />
            ))
          }

          </Modal.Body>
          <Modal.Footer>
            <Button.Group w="full" justifyContent="space-between">
              <SecondaryButton 
                title="Resetar filtros"
              />

              <SecondaryButton 
                title="Aplicar filtros"
                variant="secondary"
              />
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
}
