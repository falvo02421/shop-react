export default function formatCurrentDollar(num) {
  return "$" + Number(num.toFixed(1)).toLocaleString() + "";
}
