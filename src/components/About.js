import React from "react";
import "../styles/about.css";
import Header from "./Header";
import Footer from "./Footer";

function About() {
  return (
    <div className="about-container">
      <Header />
      <h1 className="about-h1">About Us</h1>
      <div className="about-main">
      <div className="about-svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            fill="none"
            viewBox="0 0 100 100"
          >
            <g fill="#fff" clipPath="url(#clip0_359_848)">
              <path d="M10.466 51.047V23.26c-.356-.024-.643-.043-.933-.064-1.557-.108-2.717-1.242-2.798-2.801a28.234 28.234 0 010-2.873c.079-1.583 1.29-2.788 2.877-2.836 1.515-.045 3.03-.008 4.546-.013.658-.003 1.13.293 1.143.96.016.74-.503 1.004-1.194 1.001-1.351-.005-2.7-.008-4.052 0-1.057.008-1.365.312-1.38 1.34a75.209 75.209 0 000 2.18c.01.664.336 1.087 1.016 1.087 5.766-.008 11.528-.03 17.294-.05.055 0 .11-.056.224-.117v-4.445c-1.558 0-3.094-.003-4.63 0-.659 0-1.225-.167-1.244-.941-.02-.756.485-1.018 1.173-1.018h4.711V8.653c-2.561-.58-3.149-1.322-3.149-3.962 0-.595-.015-1.19.008-1.784.066-1.652 1.244-2.825 2.904-2.902.264-.013.527-.005.79-.005h44.479c2.616 0 3.662 1.039 3.668 3.637v1.29c-.005 2.388-.772 3.303-3.149 3.683v6.063h17.003c2.377 0 3.497 1.131 3.502 3.526v1.189c0 2.63-.695 3.465-3.367 3.927-.016.362-.05.745-.05 1.129-.003 4.294 0 8.589-.005 12.884 0 .327.079.74-.085.967-.234.328-.645.695-.999.713-.268.016-.648-.438-.827-.766-.14-.259-.052-.645-.055-.975-.01-4.263-.034-8.523-.019-12.786.003-.867-.25-1.221-1.183-1.21-4.282.041-8.566.028-12.848.007-.759-.005-1.11.153-1.107 1.034.032 8.623.019 17.247.021 25.868 0 .259.037.515.061.84.319.024.606.066.89.066 4.348.006 8.699-.024 13.047.024.903.01 1.133-.307 1.106-1.136-.04-1.221.019-2.445.026-3.666.006-.671.206-1.234.97-1.218.73.013.996.544.996 1.226v4.828h6.524c2.527 0 3.62 1.09 3.62 3.602v41.628c0 2.479-1.077 3.594-3.525 3.6-7.38.01-14.76.005-22.139 0-.295 0-.661.066-.87-.08-.308-.214-.695-.592-.695-.896 0-.304.39-.705.709-.877.284-.153.706-.069 1.07-.069h21.646c1.673 0 1.86-.193 1.86-1.879V54.842c0-1.562-.187-1.745-1.776-1.745H3.757c-1.65 0-1.815.167-1.815 1.803V96.23c0 1.618.2 1.821 1.818 1.821h60.884c.395 0 .846-.103 1.17.053.35.17.806.587.803.893 0 .315-.458.69-.798.915-.21.14-.577.06-.872.06-20.427 0-40.853.003-61.282 0-2.609 0-3.676-1.067-3.676-3.647v-41.53c0-2.587 1.073-3.652 3.666-3.657 2.173-.003 4.347-.008 6.521-.016.06 0 .121-.034.28-.082l.01.006zm45.63-.048h14.542c.027-.285.06-.481.06-.674.011-13.41.022-26.82.02-40.227 0-1.474-.035-1.477-1.553-1.477-12.648 0-25.296-.005-37.943.003-2.24 0-1.932-.23-1.934 1.98-.024 12.748-.014 25.497-.014 38.246v2.186h14.632v-2.397c0-2.643-.013-5.286.008-7.926.01-1.535.751-2.471 2.093-2.498 2.666-.052 5.335-.042 8.002 0 1.096.016 1.834.733 2.02 1.821.075.418.064.854.067 1.282.005 3.2 0 6.401 0 9.684v-.003zm-28.93.093c.037-.304.072-.463.072-.624.002-8.78 0-17.562.015-26.342 0-.681-.292-.84-.888-.84-4.279.01-8.558.016-12.837-.005-.712-.003-1.002.246-.996.975.016 2.046-.03 4.091-.027 6.14.008 6.567.035 13.137.03 19.704 0 .767.25 1.023 1.03 1.007 2.303-.047 4.608-.015 6.911-.015h6.69zM50.1 1.96h-21.45c-1.756 0-2.633.887-2.631 2.661 0 1.893.068 1.964 1.939 1.964h43.098c3.146 0 2.94.225 2.927-2.955-.005-1.474-.198-1.67-1.641-1.67H50.099zm-4.13 43.665h.038c0 1.517.018 3.034-.008 4.548-.011.682.25.92.932.907 2.037-.035 4.077-.042 6.116.002.767.016.951-.3.949-.993-.008-2.968 0-5.933.04-8.901.01-.724-.235-.983-.973-.97-2.037.04-4.076.05-6.116-.003-.827-.021-1.004.336-.988 1.055.029 1.45.008 2.901.008 4.352l.003.003zM72.82 16.631v4.625h16.482c1.973 0 2.023-.053 2.023-2.08v-.99c-.007-1.298-.26-1.555-1.567-1.555-5.104-.002-10.206 0-15.31 0H72.82z"></path>
              <path d="M13.81 86.625h5.77v-1.066c0-2.743-.002-5.483 0-8.227.004-2.37 1.145-3.499 3.53-3.51 1.22-.005 2.437-.018 3.657.006 2.002.034 3.198 1.22 3.214 3.227.024 2.81.005 5.616.005 8.425v1.131h2.994V85.47c0-4.594-.003-9.184 0-13.778.002-2.227 1.117-3.34 3.338-3.35 1.286-.006 2.57-.014 3.855 0 1.974.023 3.136 1.16 3.146 3.144.021 4.625.008 9.25.008 13.878v1.24h3.002v-1.232-17.94c0-2.627 1.04-3.668 3.644-3.67 1.185 0 2.371-.014 3.557.002 2.016.026 3.175 1.197 3.178 3.224.008 6.113.002 12.226.002 18.336v1.35h2.775c.956 0 1.91-.007 2.867 0 2.124.025 3.633 1.417 3.641 3.352.008 1.953-1.47 3.348-3.617 3.351-10.477.01-20.954.005-31.433.005H11.075c-2.748 0-3.97-1.237-3.97-3.996 0-8.095-.006-16.19.002-24.285.003-2.603 2.221-4.276 4.506-3.428 1.383.513 2.184 1.747 2.187 3.428.005 6.74.002 13.481.002 20.22v1.306l.008-.002zM36.476 91.4H61.77c.36 0 .73.021 1.085-.034.709-.111 1.223-.597 1.117-1.269-.076-.486-.524-1.004-.948-1.313-.293-.214-.825-.125-1.25-.125-16.073-.005-32.143-.002-48.217-.005-1.533 0-1.723-.19-1.723-1.694V65.66c0-.296.021-.597-.016-.89-.097-.794-.548-1.298-1.351-1.301-.807-.003-1.257.497-1.363 1.29-.034.259-.016.528-.016.793v23.78c0 1.715.361 2.075 2.093 2.075h25.293l.002-.006zm11.947-15.088c0 3.106-.016 6.21.024 9.316.005.315.34.888.545.899 1.642.087 3.289.06 4.933.08.6.007.772-.281.772-.86-.016-6.245-.013-12.49-.008-18.732 0-.828-.382-1.203-1.212-1.19-1.151.022-2.305 0-3.46.003-1.488.003-1.594.1-1.596 1.562-.006 2.973 0 5.946 0 8.92l.002.002zM35.056 86.603c1.926 0 3.792.024 5.652-.034.208-.005.572-.489.572-.753.034-4.752.021-9.507.029-14.258 0-.828-.348-1.213-1.186-1.2-1.217.021-2.435 0-3.652.005-1.31.008-1.478.175-1.48 1.493-.003 4.554-.003 9.11 0 13.664 0 .32.034.642.06 1.083h.005zm-7.22-5.137h-.005c0-1.451-.005-2.905 0-4.356.003-.771-.332-1.157-1.133-1.147-1.283.019-2.567.019-3.85 0-.735-.01-1.122.333-1.125 1.06-.013 2.905-.026 5.806.019 8.71.005.27.403.751.645.767 1.473.109 2.954.122 4.432.146.733.01 1.046-.37 1.028-1.12-.035-1.354-.01-2.707-.01-4.06zM82.306 68.582c-2.337 0-4.677.045-7.011-.019-1.096-.029-2.037.243-2.99.756-3.16 1.7-6.349 3.343-9.526 5.006-.203.105-.42.322-.609.301-.469-.056-1.11-.071-1.346-.37-.409-.518-.09-1.052.495-1.358 2.213-1.163 4.524-2.175 6.619-3.529 3.515-2.272 7.246-3.092 11.404-2.796 3.473.246 6.975.05 10.466.05.23 0 .461-.002.69.003.678.019 1.202.293 1.173 1.036-.024.68-.519.922-1.167.92-1.81-.01-3.62-.003-5.433-.003h-2.767l.002.003zM69.93 87.573c-.52-.462-.854-.663-1.049-.959-.174-.259-.206-.618-.277-.94-.358-1.645-1.31-2.736-2.888-3.357-.442-.175-.959-.64-1.07-1.068-.192-.748.54-.949 1.102-1.126 1.291-.412 2.116-1.282 2.556-2.54.174-.496.245-1.043.498-1.49.2-.354.635-.843.914-.812.37.043.757.484 1.007.846.213.307.24.743.356 1.12.442 1.449 1.314 2.45 2.795 2.95.414.14.896.603 1.002 1.007.176.677-.443.928-1.007 1.094-1.84.55-2.57 1.993-3.043 3.692-.137.497-.517.925-.901 1.586l.005-.003zm1.386-6.319l-1.547-1.831c-.564.645-1.094 1.25-1.578 1.808l1.686 1.657 1.439-1.631v-.003z"></path>
              <path d="M28.363 69.65c-.5-.61-.962-.92-1.033-1.303-.39-2.096-1.444-3.547-3.536-4.21-.296-.096-.612-.624-.625-.962-.01-.283.358-.772.646-.846 2.105-.553 2.953-2.11 3.475-4.033.11-.407.575-.899.97-1.004.682-.183.938.428 1.07 1.01.445 1.947 1.336 3.485 3.446 4.03.28.07.64.57.625.853-.019.338-.34.875-.63.954-2.095.568-2.972 2.101-3.462 4.038-.111.437-.501.799-.944 1.47l-.002.003zm-.06-8.217c-.573.645-1.105 1.247-1.63 1.84L28.322 65l1.528-1.76c-.522-.608-1.01-1.18-1.547-1.808zM80.293 38.192c.69 0 1.383-.027 2.074.005 1.267.06 2.115.835 2.176 2.109a44.133 44.133 0 010 4.258c-.058 1.26-.896 2.08-2.169 2.135-1.38.06-2.766.06-4.147 0-1.328-.058-2.132-.91-2.163-2.222a86.766 86.766 0 010-4.063c.029-1.334.835-2.15 2.155-2.217.69-.034 1.384-.005 2.074-.005zm-2.19 2.048c0 1.387-.026 2.635.03 3.877.007.182.41.484.645.497 1.017.055 2.042.071 3.056-.008.248-.019.64-.441.66-.703.078-.983.023-1.977.033-2.965.006-.495-.2-.711-.709-.7-1.18.02-2.363.005-3.715.005v-.003zM76.064 30.374c0-.692-.026-1.387.005-2.08.058-1.21.86-2.082 2.045-2.127a59.687 59.687 0 014.348 0c1.217.042 2.042.914 2.092 2.204a52.204 52.204 0 010 4.062c-.053 1.369-.922 2.212-2.269 2.244a85.66 85.66 0 01-3.952 0c-1.407-.032-2.235-.89-2.274-2.32-.019-.661-.003-1.322-.003-1.983h.008zm2.034 2.273c1.386 0 2.6.034 3.81-.032.216-.01.575-.415.59-.658a22.452 22.452 0 000-3.065c-.018-.254-.41-.666-.653-.685a24.684 24.684 0 00-3.156-.005c-.206.01-.554.354-.562.557-.052 1.245-.026 2.493-.026 3.885l-.003.003zM83.61 73.505h-6.408c-.263 0-.53.019-.787-.02-.596-.093-1.065-.45-.883-1.052.108-.357.627-.838.967-.84 4.698-.056 9.399-.038 14.097-.038.664 0 1.104.322 1.075 1.002-.026.681-.53.946-1.16.946-2.3.008-4.6.002-6.9.002zM83.597 76.444c2.24 0 4.48.006 6.72-.002.676 0 1.335.092 1.354.927.018.899-.68 1.01-1.387 1.01H76.85c-.659 0-1.328-.08-1.347-.941-.018-.933.675-.994 1.378-.991 2.24.003 4.48 0 6.72 0l-.003-.003zM83.55 90.673c-2.108 0-4.216 0-6.324-.002-.33 0-.735.076-.965-.082-.324-.227-.695-.632-.71-.978-.014-.27.444-.634.769-.825.224-.132.577-.047.874-.047H89.94c.263 0 .59-.09.777.032.366.24.656.6.978.909-.311.322-.572.732-.946.938-.282.156-.71.058-1.07.058-2.042.003-4.084 0-6.127 0l-.002-.003zM19.689 15.738c-.654.412-1.057.867-1.394.822-.34-.045-.806-.55-.875-.917-.11-.603.377-1.039.97-.914.387.082.698.523 1.299 1.012v-.003zM88.609 43.173c-.232-.361-.604-.7-.662-1.088-.09-.6.348-1.065.938-.928.364.085.864.584.88.915.016.361-.456.747-.716 1.123l-.438-.022h-.002zM70.77 99.265c-.364.225-.711.598-1.099.642-.614.075-1.033-.399-.864-.98.1-.346.611-.774.957-.79.329-.016.682.452 1.027.708-.008.14-.016.28-.02.42zM49.943 22.628c-.69 0-1.383.03-2.074-.005-1.185-.061-2.015-.783-2.079-1.97a43.016 43.016 0 01.003-4.55c.066-1.197.92-1.937 2.187-1.985 1.35-.05 2.7-.055 4.05 0 1.33.056 2.15.867 2.206 2.194.058 1.384.06 2.775 0 4.157-.064 1.385-.904 2.125-2.317 2.162-.658.018-1.317.002-1.976.002v-.008.003zm2.253-4.226c-.05-2.526.385-2.23-2.166-2.23-2.6 0-2.195-.294-2.219 2.175-.023 2.246-.005 2.246 2.211 2.246 1.45 0 2.174-.73 2.174-2.188v-.003zM50.086 26.146c.658 0 1.317-.024 1.976.005 1.222.053 2.09.803 2.153 2.02.076 1.482.076 2.972.002 4.452-.06 1.221-.914 2.006-2.129 2.043-1.383.043-2.767.04-4.15 0-1.223-.034-2.09-.808-2.153-2.019a43.342 43.342 0 01-.002-4.456c.063-1.26.94-2.006 2.229-2.048.69-.024 1.383-.005 2.074-.003v.006zm-.143 6.504c1.502 0 2.253-.77 2.253-2.307v-.098c0-1.38-.696-2.07-2.09-2.07-1.535 0-2.302.784-2.302 2.352 0 1.417.712 2.125 2.137 2.125l.002-.002zM37.801 22.633c-.658 0-1.317.016-1.976-.002-1.394-.043-2.229-.84-2.263-2.212a83.598 83.598 0 010-4.062c.031-1.32.825-2.173 2.153-2.236a44.336 44.336 0 014.147 0c1.315.06 2.134.906 2.187 2.228.053 1.35.055 2.709.003 4.06-.053 1.373-.91 2.174-2.277 2.219-.659.021-1.317.003-1.976.005h.002zM35.6 20.585c1.357 0 2.54-.016 3.72.008.517.01.71-.217.704-.706-.01-.99.045-1.984-.035-2.97-.02-.264-.413-.693-.66-.711-1.015-.082-2.04-.066-3.06-.008-.232.013-.63.325-.64.513-.058 1.245-.03 2.492-.03 3.874zM62.188 22.628c-.69 0-1.383.026-2.073-.005-1.215-.056-2.082-.812-2.145-2.03a41.14 41.14 0 01.005-4.453c.069-1.192.93-1.97 2.174-2.02a45.242 45.242 0 014.147.006c1.326.063 2.11.92 2.143 2.244a83.491 83.491 0 010 4.06c-.035 1.326-.862 2.143-2.174 2.198-.69.03-1.384.005-2.074.005v-.002l-.003-.003zm2.222-2.046c0-1.35.04-2.531-.032-3.707-.016-.246-.424-.653-.675-.672a20.875 20.875 0 00-3.043 0c-.24.016-.635.389-.65.619a25.648 25.648 0 00-.006 3.15c.01.214.353.576.553.584 1.236.056 2.474.026 3.853.026zM33.562 30.435c0-.727-.032-1.454.008-2.18.063-1.2.882-2.054 2.078-2.093a68.985 68.985 0 014.248-.003c1.162.032 2.045.793 2.116 1.953.095 1.512.095 3.04.008 4.554-.069 1.202-.962 1.971-2.177 2.006-1.349.037-2.7.034-4.05.002-1.354-.032-2.187-.89-2.234-2.257-.024-.66-.005-1.321-.005-1.982h.008zm2.09 2.21c1.332 0 2.547.028 3.76-.027.21-.01.568-.36.579-.568a30.687 30.687 0 000-3.264c-.01-.212-.358-.571-.561-.582-1.239-.055-2.48-.026-3.779-.026v4.466zM66.444 30.411c0 .693.023 1.388-.006 2.08-.055 1.263-.867 2.133-2.108 2.175a63.19 63.19 0 01-4.247 0c-1.228-.042-2.074-.898-2.13-2.172a48.618 48.618 0 010-4.16c.059-1.348.957-2.16 2.325-2.183 1.251-.024 2.503-.018 3.755 0 1.554.018 2.376.835 2.413 2.381.016.627 0 1.256 0 1.882h-.005l.002-.003zm-6.45-2.185c0 1.345-.014 2.653.018 3.961.002.154.266.426.413.431 1.302.034 2.606.018 3.913.018v-4.41h-4.345zM62.737 46.72c-.823 0-1.642.008-2.464 0-.783-.008-1.239-.362-1.236-1.197.005-1.284-.034-2.572.021-3.85.09-2.004 1.694-3.486 3.69-3.484 1.989.003 3.599 1.504 3.678 3.5.052 1.281.013 2.568.018 3.852.003.778-.408 1.158-1.151 1.177-.854.02-1.708.005-2.562.005l.006-.003zm-1.64-3.927h-.015c0 .362-.084.75.024 1.078.097.291.43.743.613.724.889-.097 1.88.487 2.664-.343.035-.037.022-.127.022-.193 0-.79.044-1.583-.024-2.368-.077-.883-.822-1.47-1.697-1.443-.838.026-1.486.608-1.581 1.459-.04.356-.005.724-.005 1.083v.003zM37.256 46.718c-.854 0-1.707.015-2.561-.006-.746-.018-1.149-.407-1.144-1.181.008-1.285-.031-2.572.019-3.853.079-1.956 1.641-3.447 3.586-3.489 2-.045 3.663 1.409 3.776 3.388.074 1.314.026 2.633.032 3.951.002.835-.464 1.182-1.244 1.19-.822.007-1.642 0-2.464 0v-.003.003zm1.657-3.83c0-.328.016-.658-.002-.986-.06-.988-.685-1.628-1.6-1.651-.956-.027-1.649.629-1.712 1.643-.027.394-.016.79-.008 1.184.026 1.626-.274 1.573 1.61 1.568 2.02-.006 1.686.132 1.715-1.755l-.002-.003zM24.137 42.42c0 .693.023 1.388-.006 2.08-.05 1.24-.772 2.104-1.992 2.175a40.148 40.148 0 01-4.44.006c-1.175-.061-1.976-.87-2.037-2.043a43.665 43.665 0 01-.005-4.356c.06-1.268.917-2.045 2.198-2.082a70.023 70.023 0 014.147.002c1.273.043 2.069.867 2.13 2.138.03.693.005 1.388.005 2.08zm-2.043-2.18c-1.357 0-2.537.013-3.72-.005-.511-.008-.712.214-.706.705.01.989-.045 1.983.034 2.966.021.261.416.679.664.7 1.014.08 2.04.063 3.054.008.232-.013.632-.317.643-.5.058-1.242.029-2.486.029-3.871l.003-.003zM19.915 26.148c.69 0 1.383-.026 2.073.006 1.25.06 2.1.89 2.135 2.146.04 1.419.042 2.84-.003 4.26-.037 1.2-.875 2.061-2.068 2.104a63.257 63.257 0 01-4.248.005c-1.199-.037-2.076-.84-2.142-2.048a42.947 42.947 0 01-.008-4.358c.063-1.298.964-2.078 2.282-2.117.659-.019 1.317-.003 1.976-.003v.003l.003.002zm2.095 6.5v-4.473c-1.276 0-2.462-.04-3.64.032-.245.016-.65.42-.669.669a20.497 20.497 0 000 3.063c.019.25.424.66.67.676 1.177.072 2.36.032 3.636.032h.002z"></path>
            </g>
            <defs>
              <clipPath id="clip0_359_848">
                <path fill="#fff" d="M0 0H100V100H0z"></path>
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="about-vision">
          <h1>OUR VISION</h1>
        </div>
        <div>
          <p className="about-p">
            ATI-KOS aspires to be a regional ICT leader, renowned for pioneering
            innovation across diverse sectors. We aim to set new standards of
            excellence, delivering transformative solutions that empower
            businesses and communities. Committed to a culture of creativity and
            collaboration, we envision a future where ATI-KOS is synonymous with
            positive change, driving advancements that leave a lasting impact on
            industries and societies alike
          </p>
        </div>
        <div className="about-svg1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="97"
            height="102"
            fill="none"
            viewBox="0 0 97 102"
          >
            <g fill="#fff" clipPath="url(#clip0_361_953)">
              <path d="M61.03 84.975c-4.763 0-9.527.01-14.29-.01-.721 0-1.185.126-1.636.828-1.411 2.192-4.445 2.196-5.85.01-.447-.694-.904-.838-1.632-.838-9.151.017-18.302.024-27.454.007-4.94-.01-8.718-2.98-9.757-7.597-1.317-5.856 3.023-11.61 8.955-11.778 3.111-.09 6.226-.038 9.337-.014.583.004.911-.15 1.246-.685 1.49-2.36 4.57-2.356 6.05.007.339.541.678.675 1.253.675 13.126-.014 26.256-.014 39.382 0 .603 0 .982-.12 1.347-.71 1.48-2.352 4.524-2.284 6.088.038.22.326.724.627 1.107.634 2.624.055 5.251.058 7.875.017 3.345-.051 5.898-2.688 5.908-6.034.01-3.353-2.506-6.035-5.87-6.052-9.04-.048-18.08-.028-27.12.003-.383 0-.89.315-1.12.644-1.626 2.309-4.52 2.308-6.149.007-.244-.346-.802-.627-1.229-.647-2.207-.11-4.435.034-6.626-.199-4.706-.507-8.244-4.702-8.244-9.549 0-4.866 3.518-9.113 8.217-9.559 2.94-.28 5.918-.154 8.878-.174.677-.004 1.12-.127 1.543-.781 1.443-2.23 4.497-2.192 5.922.062.365.578.745.74 1.35.715.86-.034 1.727-.013 2.587-.003.806.01 1.453.315 1.453 1.22 0 .89-.603 1.232-1.436 1.222-.487-.007-.975.007-1.462 0-1.145-.02-2.072-.024-2.932 1.202-1.358 1.932-4.246 1.579-5.53-.473-.351-.561-.693-.75-1.32-.74-2.512.032-5.024 0-7.54.018-4.133.03-7.373 3.25-7.367 7.295.007 4.02 3.271 7.23 7.398 7.267 1.24.01 2.478-.04 3.714.014 1.287.058 2.285-.034 3.223-1.301 1.334-1.809 4.161-1.47 5.39.469.44.692.898.836 1.625.832 8.891-.02 17.778-.038 26.67 0 4.905.02 8.66 4.107 8.389 9.021-.244 4.442-3.914 7.891-8.549 7.977-2.475.044-4.95.027-7.425 0-.646-.007-1.053.13-1.449.743-1.442 2.24-4.5 2.243-5.928.01-.393-.613-.792-.753-1.446-.753-13.089.013-26.18.013-39.27 0-.613 0-.985.154-1.354.72-1.49 2.29-4.449 2.232-6.04-.011-.247-.35-.8-.661-1.215-.672-2.926-.058-5.85-.058-8.776-.024-4.15.048-7.276 3.114-7.36 7.165-.082 3.905 3.02 7.31 7.065 7.354 9.49.102 18.98.044 28.467.017.321 0 .748-.284.941-.565 1.693-2.463 4.635-2.521 6.206-.028.396.627.846.617 1.405.617 9.564 0 19.129.017 28.693-.014 2.804-.01 5.174.904 6.927 3.124 2.123 2.688 2.573 5.726 1.141 8.86-1.418 3.106-3.91 4.908-7.343 4.952-6.562.082-13.126.045-19.691.02-.785 0-1.246.192-1.706.901-1.405 2.155-4.45 2.079-5.858-.116-.375-.59-.751-.791-1.428-.784-3 .037-6 .017-9.003.017-.301 0-.599 0-.9-.007-.742-.017-1.236-.35-1.256-1.144-.02-.856.48-1.23 1.28-1.233 2.061-.007 4.127-.007 6.188-.007.975 0 1.954-.044 2.925.014 1.057.062 1.788-.14 2.5-1.144 1.4-1.966 4.299-1.716 5.633.353.338.524.64.798 1.307.794 6.487-.03 12.977 0 19.464-.027 3.111-.014 5.437-1.85 6.108-4.71.62-2.65-.61-5.537-3.065-6.702-1.012-.48-2.227-.709-3.355-.73-4.726-.078-9.452-.033-14.175-.033v.003zm-7.062-48.37l.522-.024c.29-.483.778-.945.829-1.452.071-.733-.552-1.253-1.232-1.065-.44.12-1.026.76-1.03 1.171-.003.456.583.915.911 1.374v-.004zm17.297 28.797a865.91 865.91 0 00-.514-.01c-.322.465-.833.897-.914 1.4-.122.736.484 1.281 1.164 1.144.447-.089 1.07-.699 1.1-1.11.031-.452-.53-.948-.832-1.424h-.004zM50.437 51.894c-.003.185-.01.366-.014.551.45.326.908.904 1.348.894.396-.01.992-.61 1.117-1.058.197-.709-.332-1.301-1.05-1.226-.49.051-.937.544-1.401.842v-.003zM21.625 66.487c0 .182-.003.367-.007.548.454.319.921.89 1.361.874.396-.018.982-.627 1.1-1.076.187-.712-.351-1.298-1.066-1.209-.49.059-.928.559-1.391.863h.003zm20.768 15.92l-.545.016c-.288.476-.772.932-.816 1.428-.068.727.524 1.254 1.222 1.049.443-.13 1.03-.737 1.036-1.14.007-.45-.572-.905-.897-1.357v.003zm9.652 17.178c.217-.267.725-.633.846-1.099.19-.723-.247-1.247-1.025-1.305-.694-.051-1.168.288-1.24 1.017-.074.764.292 1.22 1.416 1.388h.003z"></path>
              <path d="M86.73 2.449c2.577 0 5.082-.004 7.59 0 1.61.003 1.843.233 1.846 1.832.007 4.398.004 8.799 0 13.196 0 1.706-.213 1.925-1.862 1.928-2.587.007-5.173 0-7.76 0-2.218 0-2.241-.02-2.424-2.308h-9.466v14.49c1.046 0 2.116-.013 3.182.004 1.165.02 1.54.39 1.561 1.576.024 1.366.024 2.73 0 4.096-.02 1.168-.42 1.592-1.564 1.6-2.963.02-5.925.02-8.884 0-1.155-.008-1.554-.425-1.578-1.587a141.775 141.775 0 01-.003-3.983c.013-1.339.359-1.685 1.662-1.705.938-.017 1.872-.017 2.81-.035.068 0 .132-.054.366-.157v-1.247-28.1c0-1.833.213-2.052 1.977-2.052h9.785c1.595 0 2.517.816 2.766 2.448l-.004.004zM74.613 14.487h9.49V2.545h-9.49V14.49v-.004zm19.132-9.569h-7.072v11.99h7.072V4.919zM76.95 34.06h-7.096v2.288h7.096V34.06z"></path>
            </g>
            <defs>
              <clipPath id="clip0_361_953">
                <path
                  fill="#fff"
                  d="M0 0H96V102H0z"
                  transform="translate(.17)"
                ></path>
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="about-mission">
          <h1>OUR MISSION</h1>
        </div>
        <div>
          <p className="about-p">
            At Ati-kos, we build telecommunications infrastructure and software
            solutions for businesses and institutions. Simultaneously, we are
            dedicated to preparing individuals to adeptly navigate new
            technologies. Our mission is to create impactful, inclusive, and
            accessible tech solutions, fostering organizational success and
            individual prosperity in a rapidly evolving digital landscape.
          </p>
        </div>
        <div className="about-svg2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="94"
            height="93"
            fill="none"
            viewBox="0 0 94 93"
          >
            <g fill="#fff" clipPath="url(#clip0_361_947)">
              <path d="M58.054 74.4v9.307h14.92c1.657 0 2.094.448 2.094 2.135v5.134c0 1.54-.478 2.021-2.016 2.021H29.263c-2.679 0-5.36.003-8.04 0-1.46 0-1.949-.502-1.949-1.987-.003-1.81-.005-3.616 0-5.424.005-1.354.518-1.877 1.864-1.877 4.683-.005 9.365 0 14.048 0h1.087v-9.306H2.808c-1.688 0-2.138-.44-2.138-2.09V14.489c0-1.61.456-2.067 2.063-2.067h35.091v-6.15c-.267-.017-.544-.054-.82-.054-4.166-.002-8.333.01-12.498-.015-.59-.003-.901.16-1.191.701-1.028 1.908-3.158 2.816-5.167 2.288-2.143-.562-3.53-2.332-3.533-4.508C14.612 2.5 15.987.724 18.122.155a4.539 4.539 0 015.18 2.257c.31.582.657.73 1.27.724 4.813-.023 9.625-.015 14.435-.013 1.468 0 1.954.497 1.957 1.983.002 2.388 0 4.774 0 7.238H53.37V8.338c0-1.131-.005-2.26 0-3.39.01-1.284.538-1.822 1.82-1.822 4.843-.005 9.689-.013 14.532.01.647.003 1.004-.152 1.338-.776 1-1.876 3.197-2.743 5.206-2.187 2.136.593 3.469 2.355 3.453 4.568-.016 2.124-1.393 3.869-3.497 4.438a4.534 4.534 0 01-5.185-2.241c-.308-.575-.642-.74-1.266-.735-4.388.026-8.778.015-13.238.015v6.206h35.029c1.662 0 2.102.445 2.102 2.127v57.723c0 1.68-.446 2.13-2.102 2.13H58.048l.006-.003zm-54.25-9.357h86.7V15.561H56.552c-.033.132-.075.22-.075.308-.005 4.81-.013 9.619.013 14.43 0 .302.212.662.432.895.982 1.027 2.004 2.013 3.008 3.017 1.16 1.162 1.165 1.882.034 3.03-.438.446-.867.899-1.364 1.414 1.2.111 2.314.01 3.267.354 1.278.463.595 1.866.906 2.857 5.068 0 10.1.013 15.135-.03.29 0 .665-.4.846-.705 1.098-1.847 3.203-2.771 5.216-2.233 2.141.572 3.51 2.342 3.508 4.526-.003 2.176-1.387 3.944-3.533 4.508-2.006.528-4.145-.38-5.167-2.285-.29-.538-.596-.706-1.188-.704-4.683.026-9.363.013-14.046.016-.277 0-.556.033-.875.054v1.136c-.01 1.395-.52 1.897-1.939 1.905-.662.002-1.325 0-1.988 0l-.17.287c.514.466 1.055.906 1.542 1.4.909.921.904 1.757-.01 2.686a381.883 381.883 0 01-3.831 3.838c-1.049 1.038-1.823 1.02-2.894-.041-.459-.453-.92-.906-1.564-1.543v1.39c0 .388.008.774 0 1.162-.03 1.09-.587 1.654-1.69 1.664-1.97.016-3.94.016-5.91 0-1.105-.008-1.664-.57-1.688-1.661-.015-.756-.002-1.512-.002-2.27l-.3-.163c-.487.543-.948 1.118-1.47 1.625-.845.818-1.694.805-2.543-.028a282.904 282.904 0 01-4.04-4.04c-.829-.846-.834-1.698-.014-2.546.505-.523 1.072-.984 1.784-1.628-1.382-.124-2.488-.023-3.44-.36-1.29-.458-.65-1.842-.917-2.87h-.882c-4.618 0-9.234.013-13.852-.013-.652-.002-1.002.168-1.336.784-1.01 1.874-3.199 2.736-5.21 2.177-2.13-.593-3.461-2.36-3.443-4.573.015-2.122 1.398-3.872 3.502-4.433a4.539 4.539 0 015.182 2.251c.311.58.65.735 1.269.73 4.649-.026 9.298-.013 13.947-.015.28 0 .562-.031.906-.055v-1.107c.008-1.424.505-1.928 1.905-1.936.684-.005 1.367 0 2.05 0 .055-.114.107-.228.161-.342-.536-.46-1.108-.89-1.602-1.392-.873-.885-.855-1.718.02-2.608 1.018-1.038 2.092-2.021 3.063-3.098.323-.36.574-.93.58-1.408.044-4.487.025-8.972.025-13.46v-.89H3.805v49.478-.003zm86.729 3.227H3.84v2.99h86.692v-2.99zM54.75 33.58c-1.124 1.278-2.087 2.238-4.168 1.4-2.154-.87-1.82-2.391-1.89-3.92h-3.085c.062 1.671.186 3.084-1.936 3.943-2.066.836-3.042-.083-4.06-1.247-.784.73-1.483 1.38-2.249 2.09 1.25 1.121 2.226 2.043 1.39 4.103-.864 2.132-2.317 1.935-3.927 1.907v3.193c1.735-.21 3.019-.075 3.87 1.918.873 2.04-.026 3.051-1.367 4.177l2.193 2.065c1.129-1.431 2.159-2.19 4.209-1.374 2.151.854 1.89 2.344 1.903 3.936h3.015c-.096-1.693-.06-3.036 1.988-3.92 2.128-.92 3.06.343 4.308 1.36l2.096-2.225c-1.338-1.108-2.272-2.076-1.439-4.156.865-2.158 2.382-1.838 3.927-1.897v-3.087c-1.646.077-3.034.173-3.875-1.892-.82-2.014-.14-3.077 1.23-4.123l-2.13-2.251h-.003zM40.966 15.553v1.13c0 4.258.052 8.515-.033 12.77-.026 1.239.631 1.813 1.426 2.434.085-.08.124-.1.124-.121.016-.74.018-1.48.042-2.22.033-1.04.585-1.61 1.628-1.62 1.998-.019 4-.019 6 0 1.09.01 1.639.582 1.662 1.687.016.75.003 1.503.003 2.409 1.066-.776 1.625-1.465 1.594-2.73-.098-4.221-.038-8.447-.038-12.67v-1.066H40.965v-.003zm-18.56 74.282h49.489V86.85H22.406v2.984zm32.471-15.38h-15.4v9.18h15.4v-9.18zM19.341 3.123c-.781-.046-1.57.668-1.617 1.468-.047.786.665 1.573 1.467 1.617.787.044 1.569-.665 1.618-1.467.05-.784-.663-1.571-1.468-1.62v.002zm57.273 1.538c-.005-.8-.756-1.54-1.55-1.532-.803.007-1.538.75-1.533 1.552.005.8.753 1.54 1.55 1.532.798-.005 1.538-.755 1.533-1.552zM11.469 41.869c-.802.028-1.524.794-1.496 1.589.029.802.798 1.527 1.59 1.496.805-.032 1.527-.797 1.496-1.59-.031-.804-.795-1.524-1.59-1.495zm71.316 3.085c.792.026 1.556-.702 1.582-1.504.023-.792-.705-1.558-1.504-1.584-.795-.023-1.559.704-1.582 1.504-.023.797.699 1.555 1.504 1.581v.003z"></path>
              <path d="M19.264 32.568h6.883c.29 0 .582-.013.872.003.92.049 1.53.657 1.543 1.519.01.867-.59 1.55-1.499 1.558-3.132.026-6.264.026-9.396 0-.971-.008-1.491-.66-1.494-1.752-.008-3.68-.002-7.36-.002-11.04v-1.144H9.14c-.29 0-.583.018-.872-.01-.84-.086-1.409-.735-1.396-1.563.013-.79.562-1.488 1.352-1.496 3.227-.034 6.458-.039 9.686 0 .878.01 1.351.717 1.351 1.788.005 3.646 0 7.295 0 10.944v1.193h.003zM75.076 32.568V20.7c0-1.62.453-2.078 2.053-2.078 2.808 0 5.617-.002 8.428 0 1.245 0 1.908.544 1.91 1.54 0 .999-.665 1.548-1.902 1.55-2.418.005-4.835 0-7.393 0V33.728c0 1.415-.51 1.93-1.91 1.933-2.874.005-5.747.005-8.62 0-1.22 0-1.887-.583-1.859-1.592.026-.963.673-1.493 1.856-1.496 2.446-.005 4.892 0 7.442 0l-.005-.005zM40.975 43.404c0-3.455 2.74-6.188 6.202-6.185 3.456.002 6.187 2.74 6.19 6.203 0 3.45-2.747 6.19-6.206 6.187-3.455-.002-6.189-2.743-6.186-6.203v-.002zm9.293.041c.015-1.651-1.403-3.098-3.065-3.126-1.639-.029-3.104 1.408-3.127 3.061-.024 1.644 1.398 3.095 3.062 3.13 1.636.03 3.114-1.416 3.13-3.062v-.003z"></path>
            </g>
            <defs>
              <clipPath id="clip0_361_947">
                <path
                  fill="#fff"
                  d="M0 0H93V93H0z"
                  transform="translate(.67)"
                ></path>
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="about-field">
          <h1>OUR FIELD OF ACTION</h1>
        </div>
        <div>
          <p className="about-p">
            Our list of services includes Provision of Telecommunications
            services, Concept development and design of solutions for IoT and
            Smart City, design of software applications in various fields,
            design and implementation of Data Centers, consultancy in the field
            of ICT as well as professional training in ICT field.
          </p>
        </div>
        <div className="about-svg3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="94"
            height="93"
            fill="none"
            viewBox="0 0 97 61"
          >
            <g clipPath="url(#clip0_365_967)">
              <path
                fill="#fff"
                d="M97 42.944c-.532 1.353-1.537 1.749-2.933 1.72-3.475-.068-6.952-.017-10.427-.025-1.907-.005-2.3-.302-2.862-2.11-.36-1.16-.476-1.202-1.466-.527-.182.126-.35.284-.544.382-1.272.613-1.733 1.552-1.745 3.033-.023 2.93-2.574 5.527-5.547 5.864-.83.095-1.332.404-1.806 1.126-1.532 2.332-3.763 3.45-6.531 3.34-.922-.036-1.48.24-2.032 1.015-1.808 2.55-4.247 3.716-7.397 3.125-.373-.069-.846-.038-1.168.139-2.267 1.248-4.6 1.155-6.992.503-2.624-.713-4.828-2.189-6.93-3.849-4.878-3.854-9.806-7.644-14.588-11.619-2.332-1.938-4.376-4.23-6.554-6.36-.287-.282-.593-.545-1-.916-.208.494-.386.854-.512 1.23-.337.987-1 1.548-2.042 1.55-3.95.013-7.899.023-11.85-.008-1.195-.01-1.849-.665-2.02-1.87-.06-.408-.051-.825-.054-1.24 0-11.455 0-22.913.003-34.37 0-.476 0-.965.09-1.427C.304.578 1.037-.064 2.11.005 7.978.39 13.836.89 19.504 2.614c1.079.327 2.12.826 3.123 1.355 1.079.568 1.56 1.491 1.37 2.783-.193 1.312-.076 1.394 1.281 1.396 4.425.005 8.85-.023 13.271.02 1.1.011 2.004-.268 2.89-.928 2.616-1.94 5.521-3.227 8.821-2.856 1.983.222 3.987.72 5.858 1.427 3.875 1.463 7.664 3.153 11.496 4.736 1.152.476 1.185.455 1.35-.739.134-.97.772-1.465 1.588-1.708 2.993-.895 5.97-1.893 9.013-2.568 4.764-1.056 9.62-1.404 14.497-1.453 1.398-.013 2.401.363 2.933 1.716V42.95l.005-.005zM49.255 57.115c.028-.105.053-.212.08-.317-.232-.25-.46-.504-.696-.75-2.107-2.158-4.22-4.312-6.319-6.478-.486-.501-.962-1.018-1.38-1.575-.59-.79-.486-1.89.175-2.535.676-.66 1.71-.695 2.51-.061.27.215.491.493.737.742 3.041 3.061 6.05 6.158 9.142 9.168 1.31 1.274 2.8 1.105 4.08-.23.935-.972.92-1.33-.02-2.284-2.428-2.465-4.85-4.936-7.26-7.416-.487-.5-.958-1.026-1.35-1.599-.532-.775-.436-1.647.151-2.289a1.86 1.86 0 012.343-.333c.344.21.628.527.917.819 2.968 3 5.896 6.046 8.912 8.995 1.365 1.335 2.93 1.299 4.46.163 1.036-.767 1.066-1.291.16-2.21-2.943-2.984-5.889-5.966-8.819-8.96-.689-.704-1.373-1.418-1.978-2.193-.648-.828-.534-1.823.18-2.509.646-.621 1.671-.68 2.441-.117.228.166.43.373.631.578 3.148 3.227 6.291 6.46 9.444 9.683.555.565 1.15 1.094 1.737 1.624.583.524 1.247.555 1.95.284 1.67-.645 2.407-2.356 1.386-3.88-1.122-1.675-2.39-3.333-3.893-4.65-6.035-5.289-12.187-10.442-18.283-15.66-.504-.432-.96-.493-1.552-.23-.808.36-1.624.734-2.475.951-.843.215-1.453.64-2.023 1.292-2.37 2.724-5.321 3.985-8.948 3.57-3.705-.422-5.926-2.851-5.493-6.181.121-.941.362-1.883.683-2.778.892-2.493 2.363-4.642 4.058-6.644.228-.269.413-.578.666-.936-.274-.067-.395-.123-.514-.123-3.695-.005-7.393 0-11.088-.015-.656-.003-.871.38-.988.928-.235 1.123-.438 2.256-.732 3.366A3482.764 3482.764 0 0117.994 32.4c-.157.584-.243 1.087.246 1.584 2.026 2.058 3.862 4.347 6.073 6.176a666.551 666.551 0 0018.982 15.087c1.272.974 3.052 1.294 4.62 1.847.4.14.894.02 1.342.02h-.002zM33.849 23.01c.144.926.41 1.33 1.246 1.62 1.78.616 3.53.52 5.06-.615.902-.67 1.606-1.6 2.421-2.394.403-.388.798-.877 1.29-1.063 1.823-.696 3.69-1.282 5.538-1.911 1.008-.343 1.874-.21 2.713.54a316.566 316.566 0 007.392 6.432c5.294 4.44 10.85 8.58 15.414 13.852.177.204.775.268 1.036.127.777-.414 1.461-1.005 2.226-1.45.805-.468.947-1.018.626-1.897a2685.791 2685.791 0 01-6.864-18.962c-.294-.819-.785-1.284-1.595-1.596-3.544-1.358-7.064-2.777-10.59-4.176-2.496-.99-4.95-2.103-7.498-2.936-2.48-.811-4.97-.5-7.208.907a31.915 31.915 0 00-3.888 2.878c-2.578 2.232-4.939 4.68-6.352 7.874-.395.893-.65 1.847-.97 2.773l.003-.003zm59.228 1.448c0-5.039.002-10.077 0-15.115 0-1.317-.056-1.369-1.322-1.338a65.14 65.14 0 00-16.343 2.476c-1.94.555-1.857.524-1.163 2.427a5466.63 5466.63 0 019.54 26.412c.545 1.514.505 1.534 2.042 1.54 1.894.004 3.789.007 5.683 0 1.467-.008 1.563-.103 1.566-1.574.002-4.943 0-9.885 0-14.828h-.003zm-89.232-4.11c0 5.005-.006 10.013.002 15.018 0 1.227.109 1.33 1.284 1.335 2.148.01 4.295-.031 6.44.02.857.02 1.252-.332 1.472-1.123.446-1.596.968-3.168 1.429-4.76 2.016-6.946 4.021-13.897 5.224-21.045.537-3.19 1.203-3.013-2.58-3.842C13.27 5.11 9.338 4.678 5.438 4.1c-1.434-.213-1.59-.044-1.593 1.422-.006 4.94 0 9.885 0 14.826z"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_365_967">
                <path fill="#fff" d="M0 0H97V61H0z"></path>
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="about-client">
          <h1>OUR CLIENTS AND PARTNERS</h1>
        </div>
        <div>
          <p className="about-p">
            We serve a diverse clientele ranging from institutions and
            public/private companies to individual clients. Building on our
            commitment to excellence, ATI-KOS has forged robust partnerships
            with leading Kosovar and international ICT companies, including
            Cisco, Mikrotik, L-Com, Ubiquity, and more. These collaborations
            empower us to deliver cutting-edge solutions to meet the dynamic
            needs of our clients.
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default About;