interface User {
  username: string; // Required, must be unique
  full_name: string; // Required
  email: string; // Required, must be unique
  phone_number: string; // Required
  residential_address: string; // Required
  admin?: boolean; // Optional, defaults to false
  admin_data_id?: string; // Optional
  driver?: boolean; // Optional, defaults to false
  drivers_license?: string; // Optional
  car_picture?: string; // Optional
  car_number?: string; // Optional
  activity?: boolean; // Optional, defaults to false
  status?: "registered" | "unregistered"; // Optional, defaults to 'unregistered'
  trips?: string[]; // Optional, defaults to an empty array
  location?: {
    lng: number;
    lat: number;
  } | null; // Optional, defaults to null
}
