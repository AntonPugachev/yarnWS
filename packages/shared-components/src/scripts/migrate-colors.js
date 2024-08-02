const path = require('path');
const fs = require('fs');

function fromDir(startPath, filter, callback){
  if (!fs.existsSync(startPath)){
    console.log('not found');
    return;
  }

  const files = fs.readdirSync(startPath);

  for(let i=0; i < files.length; i++) {
    const filename = path.join(startPath,files[i]);
    const stat = fs.lstatSync(filename);
    if (stat.isDirectory()) {
      fromDir(filename, filter, callback);
    } else if (filter.test(filename)) {
      callback(filename)
    };
  };
};


const base = process.argv[2];

if (base) {
  fromDir(path.resolve(process.cwd(), base), /\.scss$/, (filename) => {
    fs.readFile(filename, 'utf8', (err, data) => {
      if (err) {
        return;
      }
  
      let result = data;
  
      result = result.replaceAll('var(--basic-primary)', 'var(--primary-60-main)');
      result = result.replaceAll('var(--basic-secondary)', 'var(--neutral-90)');
      result = result.replaceAll('var(--basic-tertiary)', 'var(--neutral-50)');
      result = result.replaceAll('var(--basic-hover)', 'var(--primary-70)');
      result = result.replaceAll('var(--basic-press)', 'var(--primary-80)');
      result = result.replaceAll('var(--basic-disable)', 'var(--neutral-30)');
      result = result.replaceAll('var(--basic-primary-light)', 'var(--primary-40)');
  
      result = result.replaceAll('var(--background-primary)', 'var(--neutral-00)');
      result = result.replaceAll('var(--background-secondary)', 'var(--neutral-05)');
      result = result.replaceAll('var(--background-tertiary)', 'var(--neutral-10)');
      result = result.replaceAll('var(--background-tertiary-hover)', 'var(--neutral-20)');
      result = result.replaceAll('var(--background-card)', 'var(--neutral-00)');
      result = result.replaceAll('var(--background-card-hover)', 'var(--elevated-bg)');
      result = result.replaceAll('var(--background-inversion)', 'var(--neutral-90)');
      result = result.replaceAll('var(--background-shadow)', 'var(--neutral-50)');
      result = result.replaceAll('var(--background-header)', 'var(--primary-80)');
      result = result.replaceAll('var(--background-danger)', 'var(--error-10)');
      result = result.replaceAll('var(--background-warn)', 'var(--warning-10)');
      result = result.replaceAll('var(--background-success)', 'var(--success-10)');
  
      result = result.replaceAll('var(--text-primary)', 'var(--neutral-90)');
      result = result.replaceAll('var(--text-secondary)', 'var(--neutral-50)');
      result = result.replaceAll('var(--text-tertiary)', 'var(--neutral-30)');
      result = result.replaceAll('var(--text-inversion)', 'var(--neutral-00)');
      result = result.replaceAll('var(--text-static-white)', 'var(--static-white)');
      result = result.replaceAll('var(--text-static-black)', 'var(--dark-static-neutral-00)');
  
      result = result.replaceAll('var(--status-warn)', 'var(--warning-50-main)');
      result = result.replaceAll('var(--status-warn-hover)', 'var(--warning-60)');
      result = result.replaceAll('var(--status-warn-press)', 'var(--warning-70)');
      result = result.replaceAll('var(--status-success)', 'var(--success-50-main)');
      result = result.replaceAll('var(--status-success-hover)', 'var(--success-60)');
      result = result.replaceAll('var(--status-success-press)', 'var(--success-70)');
      result = result.replaceAll('var(--status-danger)', 'var(--error-60-main)');
      result = result.replaceAll('var(--status-danger-hover)', 'var(--error-70)');
      result = result.replaceAll('var(--status-danger-press)', 'var(--error-80)');
  
      result = result.replaceAll('var(--special-blue)', 'var(--primary-50)');
      result = result.replaceAll('var(--special-softBlue)', 'var(--primary-20)');
      result = result.replaceAll('var(--special-lightBlue)', 'var(--cyan-40)');
      result = result.replaceAll('var(--special-softLightBlue)', 'var(--cyan-10)');
      result = result.replaceAll('var(--special-turquoise)', 'var(--teal-30)');
      result = result.replaceAll('var(--special-softTurquoise)', 'var(--teal-10)');
      result = result.replaceAll('var(--special-green)', 'var(--success-40)');
      result = result.replaceAll('var(--special-softGreen)', 'var(--success-10)');
      result = result.replaceAll('var(--special-yellow)', 'var(--attention-40)');
      result = result.replaceAll('var(--special-softYellow)', 'var(--attention-10)');
      result = result.replaceAll('var(--special-red)', 'var(--error-50)');
      result = result.replaceAll('var(--special-softRed)', 'var(--error-10)');
      result = result.replaceAll('var(--special-magenta)', 'var(--magenta-40)');
      result = result.replaceAll('var(--special-softMagenta)', 'var(--magenta-10)');
      result = result.replaceAll('var(--special-purple)', 'var(--purple-50)');
      result = result.replaceAll('var(--special-softPurple)', 'var(--purple-10)');
      result = result.replaceAll('var(--special-violet)', 'var(--purple-40)');
      result = result.replaceAll('var(--special-softViolet)', 'var(--purple-20)');
      result = result.replaceAll('var(--special-gray)', 'var(--neutral-30)');
      result = result.replaceAll('var(--special-softGray)', 'var(--neutral-05)');
  
      fs.writeFile(filename, result, 'utf8', (err) => {
        if (err) {
          console.error(`Ошибка при миграции ${filename}`, err);
        }
      });
    });
  });
} else {
  console.error('Укажите начальную директорию.');
}
