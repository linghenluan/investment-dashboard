document.addEventListener('DOMContentLoaded', function() {
  var container = document.getElementById('portfolioChartContainer');
  if (!container) return;

  var raw = container.getAttribute('data-chart');
  if (!raw) return;

  var d;
  try { d = JSON.parse(raw); } catch(e) { return; }

  var ctx = document.getElementById('portfolioChart');
  if (!ctx) return;

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: d.labels,
      datasets: [
        {
          label: '总资产',
          data: d.total,
          borderColor: '#4ade80',
          backgroundColor: 'rgba(74,222,128,0.08)',
          borderWidth: 2,
          pointRadius: d.labels.length > 15 ? 0 : 3,
          pointHoverRadius: 5,
          tension: 0.3,
          fill: true,
        },
        {
          label: '美团',
          data: d.meituan,
          borderColor: '#f97316',
          borderWidth: 1.5,
          pointRadius: 0,
          pointHoverRadius: 4,
          tension: 0.3,
          fill: false,
          borderDash: [],
        },
        {
          label: 'TSLA',
          data: d.tsla,
          borderColor: '#60a5fa',
          borderWidth: 1.5,
          pointRadius: 0,
          pointHoverRadius: 4,
          tension: 0.3,
          fill: false,
        },
        {
          label: '现金',
          data: d.cash,
          borderColor: '#888',
          borderWidth: 1,
          pointRadius: 0,
          pointHoverRadius: 4,
          tension: 0.1,
          fill: false,
          borderDash: [4, 4],
        },
      ]
    },
    options: {
      responsive: true,
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#1a1d26',
          titleColor: '#888',
          bodyColor: '#ddd',
          borderColor: '#333',
          borderWidth: 1,
          callbacks: {
            label: function(ctx) {
              return ctx.dataset.label + ': ' + ctx.parsed.y + '万';
            }
          }
        }
      },
      scales: {
        x: {
          grid: { color: 'rgba(255,255,255,0.04)' },
          ticks: { color: '#555', font: { size: 11 }, maxTicksLimit: 8 }
        },
        y: {
          grid: { color: 'rgba(255,255,255,0.06)' },
          ticks: {
            color: '#666',
            font: { size: 11 },
            callback: function(v) { return v + '万'; }
          }
        }
      }
    }
  });
});
