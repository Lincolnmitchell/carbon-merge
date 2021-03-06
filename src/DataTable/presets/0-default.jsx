import * as React from "react";
import DataTable from "../DataTable";

export default (
  <DataTable
    uxpId="1"
    rows={[
      {
        id: "a",
        name: "Load Balancer 3",
        protocol: "HTTP",
        port: 3000,
        rule: "Round robin",
        attached_groups: "Kevins VM Groups",
        status: "Disabled"
      },
      {
        id: "b",
        name: "Load Balancer 1",
        protocol: "HTTP",
        port: 443,
        rule: "Round robin",
        attached_groups: "Maureens VM Groups",
        status: "Starting"
      },
      {
        id: "c",
        name: "Load Balancer 2",
        protocol: "HTTP",
        port: 80,
        rule: "DNS delegation",
        attached_groups: "Andrews VM Groups",
        status: "Active"
      }
    ]}
    headers={[
      {
        key: "name",
        header: "Name"
      },
      {
        key: "protocol",
        header: "Protocol"
      },
      {
        key: "port",
        header: "Port"
      },
      {
        key: "rule",
        header: "Rule"
      },
      {
        key: "attached_groups",
        header: "Attached Groups"
      },
      {
        key: "status",
        header: "Status"
      }
    ]}
  />
);
