import React, { useState } from "react";
import { useRouter } from "next/router";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { AiOutlineSchedule } from "react-icons/ai";
import { BsTable } from "react-icons/bs";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText
} from "@trendmicro/react-sidenav";

export function Sidebar() {
  const [isVisible, setIsVisible] = useState(false);

  const router = useRouter();

    return (
      <SideNav 
        expanded={isVisible}
        style={{ 
          marginTop: 56,
          background: "#212529",
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
              <MdOutlineSpaceDashboard style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>Dashboard</NavText>
          </NavItem>
          <NavItem eventKey="placed orders" onClick={() => router.push(`/agendamento`)}>
            <NavIcon>
              <AiOutlineSchedule style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>Agendar Consulta</NavText>
          </NavItem>
          <NavItem eventKey="placed orders" onClick={() => router.push(`/consultar-agendamentos`)}>
            <NavIcon>
              <BsTable style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>Consultar Agendamentos</NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    );
}
