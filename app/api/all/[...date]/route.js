import { NextResponse } from "next/server";
import prisma from "@/db";
import { endOfDay, endOfMonth, startOfDay, startOfMonth } from "date-fns";
import { UTCDate } from "@date-fns/utc";

export async function GET(request, { params }) {
  const date = params.date[0];
  const startOfTheDay = startOfDay(new UTCDate(date));
  const endOfTheDay = endOfDay(new UTCDate(date));
  const startOfTheMonth = startOfMonth(new UTCDate(date));
  const endOfTheMonth = endOfMonth(new UTCDate(date));

  const countries = await prisma.country.findMany({
    include: {
      accounts: true,
    },
  });

  const orders = await prisma.orderCount.findMany({
    where: {
      createdAt: {
        lte: endOfTheMonth,
        gte: startOfTheMonth,
      },
    },
  });

  const calls = await prisma.callCount.findMany({
    where: {
      createdAt: {
        lte: endOfTheMonth,
        gte: startOfTheMonth,
      },
    },
  });
  const correct = await prisma.correctCount.findMany({
    where: {
      createdAt: {
        lte: endOfTheMonth,
        gte: startOfTheMonth,
      },
    },
  });
  const info = await prisma.customInfo.findMany({
    where: {
      udatedAt: {
        lte: endOfTheMonth,
        gte: startOfTheMonth,
      },
    },
  });
  const mails = await prisma.mailCount.findMany({
    where: {
      createdAt: {
        lte: endOfTheMonth,
        gte: startOfTheMonth,
      },
    },
  });
  const products = await prisma.productsCount.findMany();
  const returns = await prisma.returnCount.findMany({
    where: {
      createdAt: {
        lte: endOfTheMonth,
        gte: startOfTheMonth,
      },
    },
  });
  const totalCount = await prisma.productsTotalCount.findMany();

  const noDataCountObj = {
    id: 0,
    count: 0,
  };
  const noDataInfoObj = {
    id: 0,
    info: "",
  };

  const dataCountObj = (obj) => {
    return {
      id: obj[obj.length - 1].id,
      count: obj[obj.length - 1].count,
    };
  };
  const dataInfoObj = (obj) => {
    return {
      id: obj[obj.length - 1].id,
      info: obj[obj.length - 1].info,
    };
  };

  const currentData = (
    data,
    countryId,
    accountId,
    products = false,
    info = false,
  ) => {
    const filteredData = data.filter(
      (item) => item.countryId === countryId && item.accountId === accountId,
    );

    if (info) {
      if (filteredData.length === 0) return noDataInfoObj;
      return dataInfoObj(filteredData);
    } else {
      if (filteredData.length === 0) return noDataCountObj;
      if (products) {
        return dataCountObj(filteredData);
      } else {
        const filteredByDate = filteredData.filter(
          (item) =>
            startOfDay(new UTCDate(item.createdAt)).toISOString() ===
            startOfTheDay.toISOString(),
        );
        if (filteredByDate.length === 0) return noDataCountObj;

        return dataCountObj(filteredByDate);
      }
    }
  };
  const totalData = (data, countryId, accountId, products = false) => {
    const filteredData = data.filter(
      (item) => item.countryId === countryId && item.accountId === accountId,
    );
    if (filteredData.length === 0) return 0;
    if (products) {
      return filteredData
        .map((item) => item.count)
        .reduce((acc, curr) => acc + curr, 0);
    }
    return filteredData
      .map((item) =>
        item.createdAt.getTime() <= endOfTheDay.getTime() ? item.count : 0,
      )
      .reduce((acc, curr) => acc + curr, 0);
  };

  const summaryCurrentData = (data, countryId, products = false) => {
    const filteredData = data.filter((item) => item.countryId === countryId);

    if (filteredData.length === 0) return 0;
    if (products) {
      return filteredData
        .map((item) => item.count)
        .reduce((acc, curr) => acc + curr, 0);
    }
    const filteredByDate = filteredData.filter(
      (item) =>
        startOfDay(new UTCDate(item.createdAt)).toISOString() ===
        startOfTheDay.toISOString(),
    );
    if (filteredByDate.length === 0) return 0;

    return filteredByDate
      .map((item) => item.count)
      .reduce((acc, curr) => acc + curr, 0);
  };
  const summaryTotalData = (data, countryId, products = false) => {
    const filteredData = data.filter((item) => item.countryId === countryId);
    if (filteredData.length === 0) return 0;
    if (products) {
      return filteredData
        .map((item) => item.count)
        .reduce((acc, curr) => acc + curr, 0);
    }
    return filteredData
      .map((item) =>
        item.createdAt.getTime() <= endOfTheDay.getTime() ? item.count : 0,
      )
      .reduce((acc, curr) => acc + curr, 0);
  };

  const percentData = (data, total) => {
    let percent = 0;

    if (data !== 0 && total !== 0) {
      percent = (data * 100) / total;
    }
    return parseFloat(percent.toFixed(2));
  };

  const readyData = () => {
    let data = [];
    countries
      .sort((a, b) => a.name.localeCompare(b.name))
      .forEach((country) => {
        const accountData = [];
        country.accounts
          .sort((a, b) => a.name.localeCompare(b.name))
          .forEach((account) => {
            return accountData.push({
              id: account.id,
              name: account.name,
              orders: {
                current: currentData(orders, country.id, account.id),
                total: totalData(orders, country.id, account.id),
              },
              returns: {
                current: currentData(returns, country.id, account.id),
                total: totalData(returns, country.id, account.id),
                percent: percentData(
                  totalData(returns, country.id, account.id),
                  totalData(orders, country.id, account.id),
                ),
              },
              correct: {
                current: currentData(correct, country.id, account.id),
                total: totalData(correct, country.id, account.id),
                percent: percentData(
                  totalData(correct, country.id, account.id),
                  totalData(orders, country.id, account.id),
                ),
              },
              calls: {
                current: currentData(calls, country.id, account.id),
                total: totalData(calls, country.id, account.id),
              },
              mails: {
                current: currentData(mails, country.id, account.id),
                total: totalData(mails, country.id, account.id),
              },
              products: {
                current: currentData(products, country.id, account.id, true),
                total: totalData(products, country.id, account.id, true),
                target: currentData(totalCount, country.id, account.id, true)
                  .count,
              },
              info: currentData(info, country.id, account.id, false, true),
            });
          });
        return data.push({
          id: country.id,
          name: country.name,
          accounts: accountData,
          summary: {
            orders: summaryCurrentData(orders, country.id),
            allOrders: summaryTotalData(orders, country.id),
            returns: summaryCurrentData(returns, country.id),
            returnsPercent: percentData(
              summaryTotalData(returns, country.id),
              summaryTotalData(orders, country.id),
            ),
            allReturns: summaryTotalData(returns, country.id),
            correct: summaryCurrentData(correct, country.id),
            correctPercent: percentData(
              summaryTotalData(correct, country.id),
              summaryTotalData(orders, country.id),
            ),
            allCorrect: summaryTotalData(correct, country.id),
            calls: summaryCurrentData(calls, country.id),
            allCalls: summaryTotalData(calls, country.id),
            mails: summaryCurrentData(mails, country.id),
            allMails: summaryTotalData(mails, country.id),
            products: summaryCurrentData(products, country.id, true),
            targetProducts: summaryTotalData(totalCount, country.id),
          },
        });
      });

    return data;
  };
  return NextResponse.json(readyData());
}
