import { Dropdown } from "flowbite-react";
import { Alert } from "flowbite-react";

export function IndexPage() {
  return (
          <main>
      <>
 <Dropdown label="Dropdown button">
  <Dropdown.Item>
    Dashboard
  </Dropdown.Item>
  <Dropdown.Item>
    Settings
  </Dropdown.Item>
  <Dropdown.Item>
    Earnings
  </Dropdown.Item>
  <Dropdown.Item>
    Sign out
  </Dropdown.Item>
</Dropdown>

</>
      </main>
  )
}
