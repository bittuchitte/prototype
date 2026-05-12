export default function GandharavCRM() {
  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="max-w-6xl mx-auto">

        <div className="bg-blue-900 text-white rounded-3xl p-6 shadow-xl mb-6">
          <h1 className="text-4xl font-bold">
            Gandharav Finchartg Enterprises LLP
          </h1>
          <p className="mt-2 text-lg opacity-90">
            Director & Client Management CRM
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-white rounded-3xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-blue-900">
              Register Director / Co-Director
            </h2>

            <div className="grid gap-3">
              <input className="border p-3 rounded-xl" placeholder="Full Name" />
              <input className="border p-3 rounded-xl" placeholder="Branch" />
              <input className="border p-3 rounded-xl" placeholder="Location" />
              <input className="border p-3 rounded-xl" placeholder="Mobile Number" />
              <input className="border p-3 rounded-xl" type="password" placeholder="Password" />
              <input className="border p-3 rounded-xl" type="date" />
              <input className="border p-3 rounded-xl" placeholder="Post" />
              <input className="border p-3 rounded-xl" placeholder="Rank" />

              <button className="bg-blue-900 text-white py-3 rounded-xl font-semibold hover:scale-[1.01] transition">
                Register
              </button>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-blue-900">
              Login
            </h2>

            <div className="grid gap-3">
              <input className="border p-3 rounded-xl" placeholder="Director ID" />
              <input className="border p-3 rounded-xl" type="password" placeholder="Password" />

              <button className="bg-green-700 text-white py-3 rounded-xl font-semibold hover:scale-[1.01] transition">
                Login
              </button>
            </div>

            <div className="mt-8 p-4 bg-slate-100 rounded-2xl">
              <p className="font-semibold text-slate-700">Example ID Format</p>
              <p className="text-blue-900 font-bold mt-1">
                SURAT-SHARMA-101
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-6 mt-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-blue-900">
              Client Dashboard
            </h2>

            <button className="bg-blue-900 text-white px-5 py-3 rounded-xl font-semibold">
              Download Clients
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-slate-100 p-5 rounded-2xl">
              <p className="text-slate-500">Total Clients</p>
              <h3 className="text-3xl font-bold">154</h3>
            </div>

            <div className="bg-slate-100 p-5 rounded-2xl">
              <p className="text-slate-500">Total Amount</p>
              <h3 className="text-3xl font-bold">₹24,50,000</h3>
            </div>

            <div className="bg-slate-100 p-5 rounded-2xl">
              <p className="text-slate-500">Today's Entries</p>
              <h3 className="text-3xl font-bold">12</h3>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-blue-900">
            Add Client
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            <input className="border p-3 rounded-xl" placeholder="Client Name" />
            <input className="border p-3 rounded-xl" placeholder="Location" />
            <input className="border p-3 rounded-xl" placeholder="Mobile Number" />
            <input className="border p-3 rounded-xl" placeholder="Account Type" />
            <input className="border p-3 rounded-xl" placeholder="Company Account Number" />
            <input className="border p-3 rounded-xl" placeholder="Company IFSC Code" />
            <input className="border p-3 rounded-xl" placeholder="Company Bank Branch" />
            <input className="border p-3 rounded-xl" placeholder="Client Account Number" />
            <input className="border p-3 rounded-xl" placeholder="Client IFSC Code" />
            <input className="border p-3 rounded-xl" placeholder="Client Bank Branch" />
            <input className="border p-3 rounded-xl" type="date" />
            <input className="border p-3 rounded-xl" placeholder="Amount" />
            <input className="border p-3 rounded-xl" placeholder="Total Amount" />
            <input className="border p-3 rounded-xl" placeholder="UTR Number" />
          </div>

          <button className="mt-6 bg-green-700 text-white px-6 py-3 rounded-xl font-semibold">
            Add Client
          </button>

          <div className="mt-10 overflow-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="p-3 text-left">Client</th>
                  <th className="p-3 text-left">Mobile</th>
                  <th className="p-3 text-left">Amount</th>
                  <th className="p-3 text-left">UTR</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b bg-white">
                  <td className="p-3">Rahul Patel</td>
                  <td className="p-3">9876543210</td>
                  <td className="p-3">₹50,000</td>
                  <td className="p-3">UTR908776</td>
                </tr>

                <tr className="border-b bg-slate-50">
                  <td className="p-3">Aman Shah</td>
                  <td className="p-3">9898989898</td>
                  <td className="p-3">₹1,20,000</td>
                  <td className="p-3">UTR223344</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
