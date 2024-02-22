"use client";

import { TableCell, TableRow } from "@/components/ui/table";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import CellInfo from "@/components/tables/cells/CellInfo";
import CellProducts from "@/components/tables/cells/CellProducts";
import CellMails from "@/components/tables/cells/CellMails";
import CellCalls from "@/components/tables/cells/CellCalls";
import CellCorrects from "@/components/tables/cells/CellCorrect";
import CellReturns from "@/components/tables/cells/CellReturns";
import CellOrders from "@/components/tables/cells/CellOrders";
import CellTotalCount from "@/components/tables/cells/CellTotalCount";

export function TableDataRow({ data, countryId }) {
  const [hover, setHover] = useState(false);
  const [edit, setEdit] = useState(false);
  return (
    <TableRow
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`${edit ? "bg-gray-200" : "hover:bg-gray-200/50"}`}
    >
      <TableCell className="flex items-center justify-between">
        <span className="h-[36px] flex items-center justify-center">
          {data.name}
        </span>
        {hover && (
          <>
            {!edit && (
              <Button
                id={data.id}
                size="sm"
                className="text-red-600"
                variant={"link"}
                onClick={() => setEdit(true)}
              >
                edytuj
              </Button>
            )}
          </>
        )}
        {edit && (
          <Button
            id={data.id}
            size="sm"
            className="text-red-600"
            variant={"link"}
            onClick={() => setEdit(false)}
          >
            zamknij
          </Button>
        )}
      </TableCell>
      {edit ? (
        <TableCell className="text-center">
          <span className="h-[36px] flex items-center justify-center">
            <CellOrders
              data={data.orders.current.count}
              countryId={countryId}
              accountId={data.id}
            />
          </span>
        </TableCell>
      ) : (
        <TableCell className="text-center">
          <span className="h-[36px] flex items-center justify-center">
            {data.orders.current.count}
          </span>
        </TableCell>
      )}
      <TableCell className="text-center">
        <span className="h-[36px] flex items-center justify-center">
          {data.orders.total}
        </span>
      </TableCell>
      {edit ? (
        <TableCell className="text-center">
          <span className="h-[36px] flex items-center justify-center">
            <CellReturns
              data={data.returns.current.count}
              countryId={countryId}
              accountId={data.id}
            />
          </span>
        </TableCell>
      ) : (
        <TableCell className="text-center">
          <span className="h-[36px] flex items-center justify-center">
            {data.returns.current.count}
          </span>
        </TableCell>
      )}
      <TableCell className="text-center">
        <span className="h-[36px] flex items-center justify-center">
          {data.returns.total}
        </span>
      </TableCell>
      <TableCell className="text-center">
        <span className="h-[36px] flex items-center justify-center">
          {data.returns.percent} %
        </span>
      </TableCell>
      {edit ? (
        <TableCell className="text-center">
          <span className="h-[36px] flex items-center justify-center">
            <CellCorrects
              data={data.correct.current.count}
              countryId={countryId}
              accountId={data.id}
            />
          </span>
        </TableCell>
      ) : (
        <TableCell className="text-center">
          <span className="h-[36px] flex items-center justify-center">
            {data.correct.current.count}
          </span>
        </TableCell>
      )}
      <TableCell className="text-center">
        <span className="h-[36px] flex items-center justify-center">
          {data.correct.total}
        </span>
      </TableCell>
      <TableCell className="text-center">
        <span className="h-[36px] flex items-center justify-center">
          {data.correct.percent} %
        </span>
      </TableCell>
      {edit ? (
        <TableCell className="text-center">
          <span className="h-[36px] flex items-center justify-center">
            <CellCalls
              data={data.calls.current.count}
              countryId={countryId}
              accountId={data.id}
            />
          </span>
        </TableCell>
      ) : (
        <TableCell className="text-center">
          <span className="h-[36px] flex items-center justify-center">
            {data.calls.current.count}
          </span>
        </TableCell>
      )}
      <TableCell className="text-center">
        <span className="h-[36px] flex items-center justify-center">
          {data.calls.total}
        </span>
      </TableCell>
      {edit ? (
        <TableCell className="text-center">
          <span className="h-[36px] flex items-center justify-center">
            <CellMails
              data={data.mails.current.count}
              countryId={countryId}
              accountId={data.id}
            />
          </span>
        </TableCell>
      ) : (
        <TableCell className="text-center">
          <span className="h-[36px] flex items-center justify-center">
            {data.mails.current.count}
          </span>
        </TableCell>
      )}
      <TableCell className="text-center">
        <span className="h-[36px] flex items-center justify-center">
          {data.mails.total}
        </span>
      </TableCell>
      {edit ? (
        <TableCell className="text-center">
          <span className="h-[36px] flex items-center justify-center">
            <CellProducts
              data={data.products.current.count}
              countryId={countryId}
              accountId={data.id}
            />
          </span>
        </TableCell>
      ) : (
        <TableCell className="text-center">
          <span className="h-[36px] flex items-center justify-center">
            {data.products.current.count}
          </span>
        </TableCell>
      )}
      <TableCell className="text-center">
        <span className="h-[36px] flex items-center justify-center">
          {data.products.target}
        </span>
      </TableCell>
      {edit ? (
        <TableCell className="text-center">
          <span className="h-[36px] flex items-center justify-center">
            <CellInfo
              data={data.info.info}
              countryId={countryId}
              accountId={data.id}
            />
          </span>
        </TableCell>
      ) : (
        <TableCell className="text-center">
          <span className="h-[36px] flex items-center justify-center">
            {data.info.info}
          </span>
        </TableCell>
      )}
    </TableRow>
  );
}

export function TableDataTargetRow({ data, countryId, currentDate }) {
  const [hover, setHover] = useState(false);
  const [edit, setEdit] = useState(false);
  return (
    <TableRow
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`${edit ? "bg-gray-200" : "hover:bg-gray-200/50"}`}
    >
      <TableCell className="flex items-center justify-between">
        <span className="h-[36px] flex items-center justify-center">
          {data.name}
        </span>
        {hover && (
          <>
            {!edit && (
              <Button
                id={data.id}
                size="sm"
                className="text-red-600"
                variant={"link"}
                onClick={() => setEdit(true)}
              >
                edytuj
              </Button>
            )}
          </>
        )}
        {edit && (
          <Button
            id={data.id}
            size="sm"
            className="text-red-600"
            variant={"link"}
            onClick={() => setEdit(false)}
          >
            zamknij
          </Button>
        )}
      </TableCell>
      {edit ? (
        <TableCell className="text-center">
          <span className="h-[36px] flex items-center justify-start">
            <CellTotalCount
              currentDate={currentDate}
              data={data.products.target}
              countryId={countryId}
              accountId={data.id}
            />
          </span>
        </TableCell>
      ) : (
        <TableCell className="text-center">
          <span className="h-[36px] px-[5px]  w-[200px] flex items-center justify-start">
            {data.products.target}
          </span>
        </TableCell>
      )}
    </TableRow>
  );
}
