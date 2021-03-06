export type AddressId = string | number;

export interface Address {
  id: AddressId;
  city: string;
  postCode: string;
  street: string;
  number: string;
  number2: string;
}
