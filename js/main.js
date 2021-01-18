const smokePath2 = "M1208 584C1205.5 613.5 1161.17 621.698 1186.17 662.698C1201.67 695.532 1233.5 808.99 1233.5 774C1233.5 690 1315 691.302 1315 619.5C1315 554.46 1267.5 547.5 1307 510C1346.5 472.5 1394.5 425.5 1366 400.5C1337.5 375.5 1228.5 448 1240 400.5C1251.5 353 1252 246.5 1225 251C1198 255.5 1159.5 170.5 1140 167C1120.5 163.5 1094.17 345.198 1104.67 384.698C1115.17 424.198 1183.67 410.5 1186.17 447C1188.67 483.5 1210.5 554.5 1208 584Z"

const smokePath3 = "M1208 584C1205.5 613.5 1161.17 621.698 1186.17 662.698C1201.67 695.532 1233.5 808.99 1233.5 774C1233.5 690 1348 691.802 1348 620C1348 554.96 1314 552 1353.5 514.5C1393 477 1382 420 1353.5 395C1325 370 1277 397 1288.5 349.5C1300 302 1352 162.5 1325 167C1298 171.5 1281.5 108.5 1262 105C1242.5 101.5 1155 310 1165.5 349.5C1176 389 1123.5 462.5 1126 499C1128.5 535.5 1210.5 554.5 1208 584Z"

const smokePath1 = "M1136.17 564C1133.67 593.5 1161.17 621.698 1186.17 662.698C1201.67 695.531 1233.5 808.99 1233.5 774C1233.5 690 1278.17 684.5 1278.17 612.698C1278.17 547.658 1312.17 590.198 1351.67 552.698C1391.17 515.198 1348.67 510.698 1320.17 485.698C1291.67 460.698 1308.67 432.198 1320.17 384.698C1331.67 337.198 1260.5 312 1233.5 316.5C1206.5 321 1155.67 308.698 1136.17 305.198C1116.67 301.698 1094.17 345.198 1104.67 384.698C1115.17 424.198 1158.5 449.198 1161 485.698C1163.5 522.198 1138.67 534.5 1136.17 564Z"

console.log('z')

const headerTimeline = anime.timeline({
  duration: 3000,
  easing: 'linear',
  // direction: 'alternate',

  loop: true,
})

headerTimeline
  .add({
    targets: '.smoke1',
    d: [{ value: smokePath2 }]
  })
  .add({
    targets: '.smoke1',
    d: [{ value: smokePath3 }]
  })
  .add({
    targets: '.smoke1',
    d: [{ value: smokePath1 }]
  })


// girl animation

const girlPaths = [
  {
    d: "M157 496.5L144 293L400.5 176L407.5 203L409.5 248L402.5 314.5V361.5L409.5 432.5L422.5 478L432.5 506.5L413.5 508L397 462L388 401L381.5 289.5L361 417L367.5 496.5H157Z"
  },

  {
    d: "M209.325 423.176C204.985 373.906 214.63 379.842 191 332.353C236.813 324.043 330.366 318.701 320.239 327.605C310.113 336.509 305.29 380.832 303.361 423.176C276.195 447.316 210.895 440.999 209.325 423.176Z"
  },

  {
    d: "M387.5 161.5C408.5 264 375.5 377 304.5 393C238.5 371.5 135 317.369 135 243.087C135 168.804 223.502 82.5001 289.5 82.5001C349.5 95.5001 346.5 95.5001 387.5 161.5Z"
  },

  {
    d: "M74.0001 494.087C-21.9996 516.587 11.4999 686.087 0 774.087L513 823.587C527.5 756.587 537.426 510.012 418.5 486.587C286.5 460.587 300 449.087 307.5 421.087C307.5 421.087 307.5 418.087 307.5 415.087C307.5 413.506 306.25 412.087 305 412.587C302.5 413.587 302.677 420.419 302.5 420.587C272.5 449.087 209.5 431.087 206 419.087C202.705 407.789 201.754 416.587 202 420.087C204.5 455.587 215.928 460.822 74.0001 494.087Z"
  },

  {
    d: "M432.786 495.086C426.786 495.086 420.9 486.786 414.5 467.586C406.5 443.586 396.286 353.586 400.286 328.586C404.286 303.586 406.286 197.586 403.786 194.086C401.286 190.586 394.786 393.086 396.786 412.586C398.746 431.7 372.489 492.734 372.985 494.462C372.995 494.474 373 494.486 373 494.5C373 494.51 372.995 494.497 372.985 494.462C372.699 494.124 360.932 542.915 359 540.5C347.5 516 358.1 509.7 362.5 472.5C368 426 324.5 510.586 336 542.086C336.73 544.086 333 569.5 331.5 566.5C330.3 564.1 328 557.5 327 546C327.333 564 319.5 569 312.5 583.5C309.5 589.715 316 548.086 316 542.086C316 539.394 344.5 478 357 429C367 389.8 365 386.167 364.5 378C347.5 461.167 291.346 554.5 298.5 634.5C298.813 638 271.872 609.872 269.5 607.5C265 603 328 501.5 368.5 327C382.364 267.267 395.583 196.307 387 176.5C374 146.5 314.5 94.0001 308 99.5001C301.5 105 221.5 186.5 212 228.5C201.826 273.478 215 345 218.5 353.5C222 362 205.5 462.5 185 501C181.273 508 164.5 568.5 171 583.5C171.199 583.959 166.5 588.5 165.5 589C164.5 589.5 159 547 159 540.5C159 535.3 175.833 453.167 172.5 434.5C173.167 445.333 114.6 560.7 113 561.5C111 562.5 115 519.5 115 518C115 516.5 122.5 458 121.5 460C120.5 462 47.5 493.5 64 546.5C64.2097 547.174 51.0287 507.519 48 505.5C45 503.5 99.2861 427.086 101.786 409.086C104.512 389.463 120.882 319.248 112.286 272.586C101.786 215.586 91.2861 116.086 163.786 42.5863C235.872 -30.4935 304.829 10.8594 321.286 19.0863C322.286 19.5862 413.286 68.7154 413.286 190.586C413.286 263.586 389.786 395.086 432.786 495.086Z"
  },

  // {
  //   d: "M348.944 312.78C343.797 305.353 328.827 294.36 310.12 309.809C286.738 329.121 351.15 324.665 348.944 312.78Z"
  // },
  // {
  //   d: "M348.947 312.78C344.034 305.352 329.743 294.359 311.888 309.809C289.568 329.121 351.053 324.665 348.947 312.78Z"
  // },
  // {
  //   d: "M340.971 305.593C338.28 303.117 330.455 299.453 320.677 304.603C308.454 311.04 342.124 309.555 340.971 305.593Z"
  // },
  {
    d: "M306.698 312.908C314.631 316.166 331.115 320.196 333.828 318.185C335.337 317.067 336.064 316.33 336.375 315.95C336.555 315.543 336.716 315.532 336.375 315.95C336.352 316.001 336.329 316.059 336.307 316.123C332.057 328.285 306.642 317.096 306.698 312.908Z"
  },
  {
    d: "M327.035 328.393C324.548 333.613 321.711 328.343 319.099 329.588C318.461 334.958 325.386 343.652 328.617 327.151C329.06 324.226 327.938 326.498 327.035 328.393Z"
  },
  {
    d: "M320.647 328.91C322.16 330.412 325.542 331.411 326.328 329.503C326.766 328.441 326.994 327.776 327.097 327.441C327.173 327.103 327.21 327.073 327.097 327.441C327.087 327.484 327.077 327.532 327.067 327.584C325.058 337.559 320.273 332.163 320.647 328.91Z"
  },

  {
    d: "M393.779 205C393.779 214.019 393.688 226.5 379.779 226.5C365.87 226.5 351.779 220.554 351.779 211.534C353.779 206 357.279 203 371.779 200C384.279 197.414 391.279 197 393.779 205Z"
  },
  {
    d: "M391.779 207.5C391.779 214.956 385.734 221 378.279 221C370.823 221 364.5 214.956 364.5 207.5C364.5 200.044 370.823 194 378.279 194C385.734 194 391.779 200.044 391.779 207.5Z"
  },
  {
    d: "M389.779 206C389.779 212.075 385.078 217 379.279 217C373.48 217 368.5 212.075 368.5 206C368.5 199.925 373.48 195 379.279 195C385.078 195 389.779 199.925 389.779 206Z"
  },
  {
    d: "M389.279 203.5C389.279 207.642 385.921 211 381.779 211C377.636 211 374 207.642 374 203.5C374 199.358 377.636 196 381.779 196C385.921 196 389.279 199.358 389.279 203.5Z"
  },
  {
    d: "M387.04 202.505C387.04 204.993 385.106 207.01 382.721 207.01C380.335 207.01 378 204.993 378 202.505C378 200.017 380.335 198 382.721 198C385.106 198 387.04 200.017 387.04 202.505Z"
  },
  {
    d: "M392.279 202C389.279 200.5 382.779 199.5 371.779 200.5C362.779 202.5 357.506 205.324 351.779 211C351.779 201.91 364.76 190 376.215 190C385.915 190 389.779 195 392.279 202Z"
  },
  {
    d: "M353.779 200C359.686 187.798 374.518 167.399 389.593 187.417C391.747 190.277 374.824 168.543 353.779 200Z"
  },
  {
    d: "M391.279 179C380.279 169 362.118 170.133 356.918 174.007C356.546 174.394 356.918 177.563 358.032 176.912C371.405 169.101 396.112 183.394 391.279 179Z"
  },
  {
    d: "M243.778 210C243.778 219.019 252.369 225 266.278 225C280.187 225 294.779 219.5 294.279 203C288.279 196.5 283.387 197.145 268.058 195.456C254.228 193.932 243.778 200.981 243.778 210Z"
  },
  {
    d: "M266.779 201.768C266.779 212.031 272.779 217.5 280.466 218.098C287.279 217.5 292.279 212.031 292.279 201.768C290.089 197.263 286.896 191.253 279.779 189C269.8 189 266.779 191.504 266.779 201.768Z"
  },
  {
    d: "M268.778 199.52C268.778 208.539 273.614 214.005 281.778 214.005C287.778 212.505 289.778 207.524 289.778 198.505C287.588 195.126 285.706 193.258 280.778 191.005C272.614 191.005 268.778 190.501 268.778 199.52Z"
  },
  {
    d: "M273.5 201C273.5 205.418 277.136 209 281.278 209C285.42 209 288.778 205.418 288.778 201C288.778 196.582 285.42 193 281.278 193C277.136 193 273.5 196.582 273.5 201Z"
  },
  {
    d: "M278.5 199.505C278.5 201.993 280.739 204.01 283.158 204.01C285.577 204.01 287.538 201.993 287.538 199.505C287.538 197.017 285.577 195 283.158 195C280.739 195 278.5 197.017 278.5 199.505Z"
  },
  {
    d: "M244.278 216.5C242.819 203.218 249.25 200.871 262.279 196C275.779 192 286.279 199 294.278 203C284.778 185.5 270.278 183 255.278 189.5C242.516 195.03 236.779 207 244.278 216.5Z"
  },
  {
    d: "M296.779 194C288.574 182.96 267.974 164.503 247.036 182.615C244.044 185.203 267.548 165.538 296.779 194Z"
  },
  {
    d: "M248.001 171.289C274.28 163.405 293.442 168.098 301.107 171.852C301.655 172.227 301.107 175.299 299.465 174.668C279.755 167.097 239.241 173.917 248.001 171.289Z"
  },
  {
    d: "M340.709 264.351C340.709 269.949 336.297 274.487 330.855 274.487C325.412 274.487 321 269.949 321 264.351C321 258.753 325.412 230 330.855 230C336.297 230 340.709 258.753 340.709 264.351Z"
  },
  {
    d: "M337 268.5C337 269.881 335.433 271 333.5 271C331.567 271 330 269.881 330 268.5C330 267.119 331.567 265.5 333.5 265.5C335.433 265.5 337 267.119 337 268.5Z"
  }
]

const girlPathsDefault = [
  { d: "M158 490.586L145 287.086L401.5 170.086L408.5 197.086L410.5 242.086L403.5 308.586V355.586L410.5 426.586L423.5 472.086L433.5 500.586L414.5 502.086L398 456.086L389 395.086L382.5 283.586L362 411.086L368.5 490.586H158Z" },
  { d: "M205.5 426.086C201 384.586 211 389.586 186.5 349.586C234 342.586 331 338.086 320.5 345.586C310 353.086 305 390.419 303 426.086C274.833 446.419 207.128 441.099 205.5 426.086Z" },
  { d: "M369.5 243.086C369.5 317.368 318.5 376.086 247.5 392.086C181.5 370.586 135 317.368 135 243.086C135 168.804 181.502 40.5861 247.5 40.5861C313.498 40.5861 369.5 168.804 369.5 243.086Z" },
  { d: "M74.0001 494.086C-21.9996 516.586 11.4999 686.086 0 774.086L513 823.586C527.5 756.586 537.426 510.011 418.5 486.586C286.5 460.586 300 449.086 307.5 421.086C307.5 421.086 307.5 418.086 307.5 415.086C307.5 413.505 306.25 412.086 305 412.586C302.5 413.586 302.677 420.418 302.5 420.586C272.5 449.086 209.5 431.086 206 419.086C202.705 407.788 201.754 416.586 202 420.086C204.5 455.586 215.928 460.822 74.0001 494.086Z" },
  { d: "M433.5 495.086C427.5 495.086 425.4 486.786 419 467.586C411 443.586 397 353.586 401 328.586C405 303.586 407 197.586 404.5 194.086C402 190.586 395.5 393.086 397.5 412.586C399.461 431.699 411.989 487.32 412.485 489.048C412.495 489.06 412.5 489.073 412.5 489.086C412.5 489.096 412.495 489.083 412.485 489.048C412.199 488.71 407.933 489.002 406 486.586C394.5 462.086 372.6 403.786 377 366.586C382.5 320.086 344 504.586 355.5 536.086C356.23 538.086 346.5 545.086 345 542.086C343.8 539.686 341.5 516.086 340.5 504.586C340.834 522.586 337 548.086 330 562.586C327 568.801 330 537.586 330 531.586C330 528.894 343 441.086 355.5 392.086C365.5 352.886 367 326.753 366.5 318.586C349.5 401.753 313.846 515.586 321 595.586C321.313 599.086 312.372 613.458 310 611.086C305.5 606.586 299.5 508.086 340 333.586C353.864 273.853 352.583 213.893 344 194.086C331 164.086 255.5 75.0861 249 80.5861C242.5 86.0861 164.5 157.086 155 199.086C144.827 244.064 151.5 316.586 155 325.086C158.5 333.586 185.5 429.086 165 467.586C161.273 474.586 163.5 580.586 170 595.586C170.199 596.045 168.5 599.586 167.5 600.086C166.5 600.586 154.5 579.586 154.5 573.086C154.5 567.886 147.834 529.253 144.5 510.586C145.167 521.42 146.1 543.286 144.5 544.086C142.5 545.086 135.5 543.086 135.5 541.586C135.5 540.086 118.5 346.086 117.5 348.086C116.5 350.086 95.0002 449.586 111.5 502.586C111.71 503.26 110.029 505.605 107 503.586C104 501.586 100 427.086 102.5 409.086C105.226 389.463 121.596 319.248 113 272.586C102.5 215.586 92.0002 116.086 164.5 42.5862C236.586 -30.4937 305.544 10.8593 322 19.0862C323 19.5861 414 68.7152 414 190.586C414 263.586 390.5 395.086 433.5 495.086Z" },
  // { d: "M218.699 306.686C222.155 309.162 235.147 320.808 236.5 321.086C253.5 324.586 263.699 322.186 271.199 319.186C280.199 315.586 295.762 306.637 292.699 304.186C282.699 296.186 214.348 303.57 218.699 306.686Z" },
  // { d: "M252 323.086C230 323.086 228.085 313.586 222.5 308.586C219.446 305.852 231.348 299.301 270 301.086C280.204 301.557 289.973 301.086 289.973 305.852C289.973 307.709 289.337 308.332 287.899 309.565C280.296 316.086 263.204 323.086 252 323.086Z" },
  // { d: "M259.152 313.332C236.784 314.742 231.194 309.974 227.971 306.73C227.281 306.314 222.37 302.586 269.636 302.586C274.13 302.586 282.487 303.197 282.487 304.86C282.487 306.106 282.731 306.701 281.107 307.353C279.036 308.184 275.128 312.324 259.152 313.332Z" },
  { d: "M228 305.5C245.5 306.333 281 306.5 286 305C288.783 304.165 290.062 303.65 290.587 303.392C290.833 303.137 291.164 303.109 290.587 303.392C290.556 303.425 290.526 303.461 290.5 303.5C285.5 311 229.2 307.9 228 305.5Z" },
  { d: "M275.104 311.713C271.581 315.017 264.033 312.374 259 313.424C259.365 316.575 276.48 320.645 278 310.798C278 309.069 276.384 310.512 275.104 311.713Z" },
  { d: "M262 312.836C265.616 313.498 272.953 313.63 273.986 312.438C274.561 311.775 274.825 311.365 274.934 311.161C274.985 310.958 275.053 310.936 274.934 311.161C274.927 311.186 274.921 311.215 274.916 311.246C273.883 317.206 262.248 314.743 262 312.836Z" },


  { d: "M350.835 203.356C350.835 212.376 339.56 225.318 325.651 225.318C311.742 225.318 290.612 216.881 290.612 207.861C302.657 199.414 309.226 195.472 324.556 193.783C338.386 192.259 350.835 194.337 350.835 203.356Z" },
  { d: "M342.075 206.735C342.075 216.998 333.987 225.318 324.008 225.318C314.03 225.318 305.5 217.263 305.5 207C305.5 196.737 314.03 188.152 324.008 188.152C333.987 188.152 342.075 196.472 342.075 206.735Z" },
  { d: "M339.886 204.483C339.886 213.502 333.267 220.813 325.103 220.813C316.939 220.813 309.5 213.502 309.5 204.483C309.5 195.463 316.939 188.152 325.103 188.152C333.267 188.152 339.886 195.463 339.886 204.483Z" },
  { d: "M334.411 201.667C334.411 206.643 330.244 210.677 325.103 210.677C319.963 210.677 315.5 206.643 315.5 201.667C315.5 196.691 319.963 192.657 325.103 192.657C330.244 192.657 334.411 196.691 334.411 201.667Z" },
  { d: "M330.031 200.541C330.031 203.029 328.07 205.046 325.651 205.046C323.232 205.046 321 203.029 321 200.541C321 198.053 323.232 196.036 325.651 196.036C328.07 196.036 330.031 198.053 330.031 200.541Z" },
  { d: "M350.835 203.356C347.55 190.404 336.822 194.346 322.913 194.346C309.005 194.346 298.824 202.23 290.612 207.861C290.612 198.842 309.226 187.026 325.651 187.026C339.56 187.026 350.835 194.337 350.835 203.356Z" },
  { d: "M291.707 193.22C300.467 181.206 322.459 161.121 344.813 180.831C348.007 183.647 322.913 162.248 291.707 193.22Z" },
  { d: "M344.266 166.753C317.986 158.869 298.824 163.562 291.159 167.316C290.612 167.691 291.159 170.762 292.802 170.132C312.511 162.561 353.025 169.381 344.266 166.753Z" },
  { d: "M162.5 202.014C162.5 211.033 173.776 223.976 187.685 223.976C201.593 223.976 222.724 215.538 222.724 206.519C210.679 198.072 204.109 194.13 188.779 192.441C174.95 190.916 162.5 192.995 162.5 202.014Z" },
  { d: "M186.59 205.609C186.59 215.872 190.969 220.25 200.277 221.94C204.109 220.813 222.724 215.872 222.724 205.609C220.534 201.104 210.131 192.094 203.014 189.841C193.036 189.841 186.59 195.345 186.59 205.609Z" },
  { d: "M190.969 203.356C190.969 212.375 197.588 219.687 205.752 219.687C213.916 219.687 220.534 212.375 220.534 203.356C218.344 199.977 209.584 192.094 204.657 189.841C196.493 189.841 190.969 194.337 190.969 203.356Z" },
  { d: "M196.444 200.541C196.444 205.517 200.611 209.551 205.752 209.551C210.892 209.551 215.059 205.517 215.059 200.541C215.059 195.564 210.892 191.531 205.752 191.531C200.611 191.531 196.444 195.564 196.444 200.541Z" },
  { d: "M201.5 199.414C201.5 201.902 203.581 204.5 206 204.5C208.419 204.5 210.679 201.902 210.679 199.414C210.679 196.926 208.718 194.909 206.299 194.909C203.88 194.909 201.5 196.926 201.5 199.414Z" },
  { d: "M162.5 202.014C165.785 189.062 176.513 193.004 190.422 193.004C204.331 193.004 214.511 200.888 222.724 206.519C222.724 197.5 204.109 185.683 187.685 185.683C173.776 185.683 162.5 192.995 162.5 202.014Z" },
  { d: "M222.451 190.807C213.691 178.794 191.699 158.709 169.345 178.418C166.151 181.234 191.244 159.835 222.451 190.807Z" },
  { d: "M167.008 164.284C193.287 156.4 212.449 161.093 220.114 164.847C220.661 165.223 220.114 168.294 218.471 167.663C198.762 160.093 158.248 166.912 167.008 164.284Z" },
  { d: "M266.522 263.611C266.522 269.209 262.11 273.748 256.668 273.748C251.225 273.748 246.813 269.209 246.813 263.611C246.813 258.013 251.225 229.26 256.668 229.26C262.11 229.26 266.522 258.013 266.522 263.611Z" },
  { d: "M262.143 263.611C262.143 266.721 259.446 269.243 256.12 269.243C252.794 269.243 250.098 266.721 250.098 263.611C250.098 260.501 252.794 257.98 256.12 257.98C259.446 257.98 262.143 260.501 262.143 263.611Z" },
]



const infoButton = document.querySelector('.reveal-info')

const animationDuration = 500

const girlTimeline = anime.timeline({
  duration: animationDuration,
  // easing: 'easeOutQuad',
  easing: 'cubicBezier(.5, .05, .1, .3)',
  // elasticity: 300,
  // autoplay: true,

})


const girlLooksStraight = (isFromHover) => {
  for (let i = 0; i < girlPaths.length; i++) {
    if (isFromHover) {
      console.log('in')
      girlTimeline.add({
        targets: `.girl-path${i + 1}`,
        d: [
          { value: girlPathsDefault[i].d },
        ]
      }, -1 * animationDuration)
    }
    girlTimeline.add({
      targets: `.girl-path${i + 1}`,
      d: [
        { value: girlPaths[i].d },
      ]
    }
      , animationDuration
    )
  }
}

const girlLooksRight = (isFromHover) => {
  // girlTimeline
  for (let i = 0; i < girlPathsDefault.length; i++) {

    if (isFromHover) {
      girlTimeline.add({
        targets: `.girl-path${i + 1}`,
        d: [
          { value: girlPaths[i].d },
        ]
      }, -1 * animationDuration)
    }
    girlTimeline.add({
      targets: `.girl-path${i + 1}`,
      d: [
        { value: girlPathsDefault[i].d },
      ]
    }
      , animationDuration

    )
  }
}

infoButton.addEventListener('mouseenter', girlLooksStraight)


infoButton.addEventListener('mouseleave', girlLooksRight)

let girlFlag = true

infoButton.addEventListener('click', function () {
  if (girlFlag) {

    infoButton.removeEventListener('mouseenter', girlLooksStraight)
    infoButton.removeEventListener('mouseleave', girlLooksRight)

    for (let i = 0; i < girlPaths.length; i++) {
      girlTimeline.add({
        targets: `.girl-path${i + 1}`,
        d: [
          { value: girlPaths[i].d },
        ]
      }, -1 * animationDuration)
        .add({
          targets: `.girl-path${i + 1}`,
          d: [
            { value: girlPaths[i].d },
          ]
        }
          , animationDuration
        )
    }

  } else {
    infoButton.addEventListener('mouseenter', girlLooksStraight)
    infoButton.addEventListener('mouseleave', girlLooksRight)


  }
  girlFlag = !girlFlag
  this.parentNode.classList.toggle('hide')

})