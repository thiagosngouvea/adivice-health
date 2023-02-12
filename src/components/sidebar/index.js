import React, { useState } from "react";
import { useRouter } from "next/router";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText
} from "@trendmicro/react-sidenav";

export function Sidebar() {
  const [isVisible, setIsVisible] = useState(true);

  const router = useRouter();

    return (
      <SideNav 
        expanded={isVisible}
        // nao cobrir a navbar
        style={{ 
          marginTop: 56,
          background: "#2c3e50",
         }}
        >
        <SideNav.Toggle
          onClick={() => {
            setIsVisible(!isVisible);
          }}
        />
        <SideNav.Nav defaultSelected="home">
          <NavItem eventKey="home" onClick={() => router.push(`/dashboard`)}>
            <NavIcon>
              <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>Dashboard</NavText>
          </NavItem>
          <NavItem eventKey="placed orders" onClick={() => router.push(`/agendamento`)}>
            <NavIcon>
              <i
                className="fa fa-fw fa-line-chart"
                style={{ fontSize: "1.75em" }}
              />
            </NavIcon>
            <NavText>Agendar Consulta</NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    );
}
