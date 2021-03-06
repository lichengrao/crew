import React, { FC, useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Button, Error as ErrorComponent, Field, H1 } from 'components';
import { validateEmail } from 'helpers';
