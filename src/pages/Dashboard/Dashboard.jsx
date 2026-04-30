import Footer from "../../components/footer/Footer";
import ReactECharts from "echarts-for-react";
import { FaRegTrashCan, FaPenToSquare } from "react-icons/fa6";

export default function Dashboard() {
  const option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "Bookings",
        type: "bar",
        barWidth: "45%",
        data: [45, 72, 60, 90, 110, 95],
      },
    ],
  };


  const options = {
    tooltip: {
      trigger: "axis",
      formatter: "{b}<br/>Revenue: $ {c}",
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    },
    yAxis: {
      type: "value",
      axisLabel: {
        formatter: "$ {value}",
      },
    },
    series: [
      {
        name: "Revenue",
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 8,
        lineStyle: {
          width: 3,
        },
        areaStyle: {
          opacity: 0.15,
        },
        data: [1200, 1800, 1600, 2300, 2800, 2500],
      },
    ],
  };

  return (
    <>
      <div className="content">
        <div className="pb-3">
          <div className="row align-items-center justify-content-between g-3 mb-6">
            <div className="col-12 col-md-auto">
              <h2 className="mb-0"></h2>
            </div>
            {/* <div className="col-12 col-md-auto">
              <div className="flatpickr-input-container">
                <input
                  className="form-control ps-6 datetimepicker"
                  id="datepicker"
                  type="text"
                  data-options='{"dateFormat":"M j, Y","disableMobile":true,"defaultDate":"Mar 1, 2022"}'
                />
                <span className="uil uil-calendar-alt flatpickr-icon text-body-tertiary" />
              </div>
            </div> */}
          </div>
          <div className="px-3 mb-6">
            <div className="row justify-content-between">
              <div className="col-6 col-md-4 col-xxl-2 text-center border-translucent border-start-xxl border-end-xxl-0 border-bottom-xxl-0 border-end border-bottom pb-4 pb-xxl-0 ">
                <span className="uil fs-5 lh-1 uil-envelope text-primary" />
                <h1 className="fs-5 pt-3">2,800</h1>
                <p className="fs-9 mb-0">Total Users</p>
              </div>
              <div className="col-6 col-md-4 col-xxl-2 text-center border-translucent border-start-xxl border-end-xxl-0 border-bottom-xxl-0 border-end-md border-bottom pb-4 pb-xxl-0">
                <span className="uil fs-5 lh-1 uil-envelope-upload text-info" />
                <h1 className="fs-5 pt-3">1,866</h1>
                <p className="fs-9 mb-0">Emails Providers</p>
              </div>
              <div className="col-6 col-md-4 col-xxl-2 text-center border-translucent border-start-xxl border-bottom-xxl-0 border-bottom border-end border-end-md-0 pb-4 pb-xxl-0 pt-4 pt-md-0">
                <span className="uil fs-5 lh-1 uil-envelopes text-primary" />
                <h1 className="fs-5 pt-3">1,366</h1>
                <p className="fs-9 mb-0">Emails Booking</p>
              </div>
              <div className="col-6 col-md-4 col-xxl-2 text-center border-translucent border-start-xxl border-end-md border-end-xxl-0 border-bottom border-bottom-md-0 pb-4 pb-xxl-0 pt-4 pt-xxl-0">
                <span className="uil fs-5 lh-1 uil-envelope-open text-info" />
                <h1 className="fs-5 pt-3">1,200</h1>
                <p className="fs-9 mb-0">Emails Services</p>
              </div>
              <div className="col-6 col-md-4 col-xxl-2 text-center border-translucent border-start-xxl border-end border-end-xxl-0 pb-md-4 pb-xxl-0 pt-4 pt-xxl-0">
                <span className="uil fs-5 lh-1 uil-envelope-check text-success" />
                <h1 className="fs-5 pt-3">900</h1>
                <p className="fs-9 mb-0">Emails Revenue</p>
              </div>
              <div className="col-6 col-md-4 col-xxl-2 text-center border-translucent border-start-xxl border-end-xxl pb-md-4 pb-xxl-0 pt-4 pt-xxl-0">

              </div>
            </div>
            <div className="row pt-6 g-4 gx-6">
              <div className="col-md-6 card">
                <div className="row justify-content-between mb-4">
                  <div className="col-12 mt-4">
                    <h3>Bookings Overview</h3>
                  </div>
                </div>
                <div className="echart-booking-overview" />
                <ReactECharts option={option} style={{ height: 350 }} />
              </div>
              <div className="col-md-6 card">
                <div className="row justify-content-between mb-4">
                  <div className="col-auto mt-4">
                    <h3>Revenue Statistics</h3>
                  </div>
                </div>
                <div className="echart-revenue-statistics" />
                <ReactECharts option={options} style={{ height: 350 }} />
              </div>
            </div>

          </div>
        </div>

        <div className="table-responsive scrollbar">
          <table className="table fs-9 mb-0 border-top border-translucent">
            <thead>
              <tr style={{ backgroundColor: "#1c2765", color: "white" }}>
                <th>Booking ID</th>
                <th>User</th>
                <th>Service</th>
                <th>Status</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="list" id="project-list-table-body">
              <tr className="position-static">
                <td className="align-middle time white-space-nowrap ps-0 projectName py-4">
                  <a className="fw-bold fs-8" href="#">
                    B-11110
                  </a>
                </td>
                <td className="align-middle white-space-nowrap start ps-3 py-4">
                  <p className="mb-0 fs-9 text-body">
                    Waqas
                  </p>
                </td>
                <td className="align-middle white-space-nowrap start ps-3 py-4">
                  <p className="mb-0 fs-9 text-body">
                    AC Services
                  </p>
                </td>
                <td className="align-middle white-space-nowrap text-center statuses">
                  <span className="badge badge-phoenix fs-10 badge-phoenix-success">
                    completed
                  </span>
                </td>
                <td className="align-middle white-space-nowrap start ps-3 py-4">
                  <p className="mb-0 fs-9 text-body">Nov 17, 2020</p>
                </td>
                <td className="align-middle text-end white-space-nowrap pe-0 action">
                  <div className="d-flex gap-2 align-items-center justify-content-center">
                    <FaPenToSquare
                      // onClick={() => onEdit(student)}
                      style={{ fontSize: "22px", cursor: "pointer" }}
                    />
                    <FaRegTrashCan
                      // onClick={() => handleDelete(student.id)}
                      style={{ fontSize: "22px", cursor: "pointer", color: 'red' }}
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </>
  );
}
