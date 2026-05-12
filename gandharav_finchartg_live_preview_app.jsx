import { useState } from 'react'

export default function GandharavCRM() {
  const [page, setPage] = useState('login')

  const LoginPage = () => (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 p-6">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">
        <h1 className="text-4xl font-bold text-blue-900 mb-2">
          Login
        </h1>

        <p className="text-slate-500 mb-8">
          Gandharav Finchartg Enterprises LLP
        </p>

        <div className="space-y-4">
          <input
            className="w-full border p-4 rounded-2xl"
            placeholder="Director ID"
          />

          <input
            className="w-full border p-4 rounded-2xl"
            type="password"
            placeholder="Password"
          />

          <button
            onClick={() => setPage('dashboard')}
            className="w-full bg-blue-900 text-white py-4 rounded-2xl font-semibold text-lg"
          >
            Login
          </button>
        </div>

        <p className="mt-6 text-center text-slate-600">
          New Director?{' '}
          <button
            onClick={() => setPage('register')}
            className="text-blue-900 font-semibold"
          >
            Register Here
          </button>
        </p>
      </div>
    </div>
  )

  const RegisterPage = () => (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-slate-200 p-6">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-8">

        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-blue-900">
              Register Director
            </h1>

            <p className="text-slate-500 mt-2">
              Create Director / Co-Director Account
            </p>
          </div>

          <button
            onClick={() => setPage('login')}
            className="bg-slate-200 px-4 py-2 rounded-xl"
          >
            Back
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <input className="border p-4 rounded-2xl" placeholder="Full Name" />
          <input className="border p-4 rounded-2xl" placeholder="Branch" />
          <input className="border p-4 rounded-2xl" placeholder="Location" />
          <input className="border p-4 rounded-2xl" placeholder="Mobile Number" />
          <input className="border p-4 rounded-2xl" type="password" placeholder="Password" />
          <input className="border p-4 rounded-2xl" type="date" />
          <input className="border p-4 rounded-2xl" placeholder="Post" />
          <input className="border p-4 rounded-2xl" placeholder="Rank" />
        </div>

        <div className="mt-6 bg-slate-100 p-4 rounded-2xl">
          <p className="font-semibold text-slate-700">Generated ID Example</p>
          <p className="text-blue-900 text-xl font-bold mt-1">
            SURAT-SHARMA-101
          </p>
        </div>

        <button
          onClick={() => setPage('login')}
          className="mt-6 w-full bg-blue-900 text-white py-4 rounded-2xl font-semibold text-lg"
        >
          Register Director
        </button>
      </div>
    </div>
  )

  const DashboardPage = () => (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="max-w-7xl mx-auto">

        <div className="bg-blue-900 text-white rounded-3xl p-6 shadow-xl mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold">
              Gandharav Finchartg Enterprises LLP
            </h1>

            <p className="mt-2 text-lg opacity-90">
              Director & Client Management CRM
            </p>
          </div>

          <button
            onClick={() => setPage('login')}
            className="bg-white text-blue-900 px-5 py-3 rounded-2xl font-semibold"
          >
            Logout
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-6 rounded-3xl shadow-lg">
            <p className="text-slate-500">Total Clients</p>
            <h2 className="text-4xl font-bold mt-2">154</h2>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-lg">
            <p className="text-slate-500">Total Amount</p>
            <h2 className="text-4xl font-bold mt-2">₹24,50,000</h2>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-lg">
            <p className="text-slate-500">Today's Entries</p>
            <h2 className="text-4xl font-bold mt-2">12</h2>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <h2 className="text-3xl font-bold text-blue-900">
              Add Client
            </h2>

            <button className="bg-green-700 text-white px-6 py-3 rounded-2xl font-semibold">
              Download Clients
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <input className="border p-4 rounded-2xl" placeholder="Client Name" />
            <input className="border p-4 rounded-2xl" placeholder="Location" />
            <input className="border p-4 rounded-2xl" placeholder="Mobile Number" />
            <input className="border p-4 rounded-2xl" placeholder="Account Type" />
            <input className="border p-4 rounded-2xl" placeholder="Company Account Number" />
            <input className="border p-4 rounded-2xl" placeholder="Company IFSC Code" />
            <input className="border p-4 rounded-2xl" placeholder="Company Bank Branch" />
            <input className="border p-4 rounded-2xl" placeholder="Client Account Number" />
            <input className="border p-4 rounded-2xl" placeholder="Client IFSC Code" />
            <input className="border p-4 rounded-2xl" placeholder="Client Bank Branch" />
            <input className="border p-4 rounded-2xl" type="date" />
            <input className="border p-4 rounded-2xl" placeholder="Amount" />
            <input className="border p-4 rounded-2xl" placeholder="Total Amount" />
            <input className="border p-4 rounded-2xl" placeholder="UTR Number" />
          </div>

          <button className="mt-6 bg-blue-900 text-white px-8 py-4 rounded-2xl font-semibold text-lg">
            Add Client
          </button>

          <div className="mt-10 overflow-auto rounded-2xl border">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="p-4 text-left">Client</th>
                  <th className="p-4 text-left">Mobile</th>
                  <th className="p-4 text-left">Amount</th>
                  <th className="p-4 text-left">UTR</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b bg-white">
                  <td className="p-4">Rahul Patel</td>
                  <td className="p-4">9876543210</td>
                  <td className="p-4">₹50,000</td>
                  <td className="p-4">UTR908776</td>
                </tr>

                <tr className="border-b bg-slate-50">
                  <td className="p-4">Aman Shah</td>
                  <td className="p-4">9898989898</td>
                  <td className="p-4">₹1,20,000</td>
                  <td className="p-4">UTR223344</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <>
      {page === 'login' && <LoginPage />}
      {page === 'register' && <RegisterPage />}
      {page === 'dashboard' && <DashboardPage />}
    </>
  )
}
