import { Checkbox as NativeCheckbox } from 'native-base';

export function Checkbox() {
  const data = [
    {
      value: "boleto",
      Label: "Checkbox de Boleto",
      title: "Boleto"
    },
    {
      value: "pix",
      Label: "Checkbox de Pix",
      title: "Pix"
    },    {
      value: "Dinheiro",
      Label: "Checkbox de Dinheiro",
      title: "Dinheiro"
    },    
    {
      value: "Cartão de Crédito",
      Label: "Checkbox de Cartão de Crédito",
      title: "Cartão de Crédito"
    },    
    {
      value: "Depósito Bancário",
      Label: "Checkbox de Depósito Bancário",
      title: "Depósito Bancário"
    }
  ]

  return (
    <>
    {
      data.map(item => {
        return (
          <NativeCheckbox
            key={item.value}
            mb={2}
            value={item.value}
            accessibilityLabel={item.Label}
            defaultIsChecked={false}
          >
            {item.title}
          </NativeCheckbox>
        )
      })
    }
    </>
  );
}
