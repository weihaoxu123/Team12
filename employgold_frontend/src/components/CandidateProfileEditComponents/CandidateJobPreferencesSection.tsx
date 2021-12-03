import React, { ChangeEvent, KeyboardEventHandler } from 'react';
import { useState } from 'react';

import { Box, Button } from '@mui/material';
import CandidateJobTypeSelection from '../MatchingCandidatePreferenceComponents/CandidateJobTypeSelection';
import CandidateJobCompensationTypeSelection from '../MatchingCandidatePreferenceComponents/CandidateJobCompensationTypeSelection';
import CandidateMinimumBaseCompensationInput from '../MatchingCandidatePreferenceComponents/CandidateMinimumBaseCompensationInput';
import CandidateLowEndHighEndCompensationInput from '../MatchingCandidatePreferenceComponents/CandidateLowEndHighEndCompensationInput';
import CandidatePreviousCompensationInput from '../MatchingCandidatePreferenceComponents/CandidatePreviousCompensationInput';
import CandidateRetirementPlanSelection from '../MatchingCandidatePreferenceComponents/CandidateRetirementPlanSelection';

interface ICandidateJobPreferenceSectionProps {
  jobPreferenceInfo: IJobPreferenceInfo | null;
  handleSaveClick: (info: IJobPreferenceInfo) => void;
  handleBackClick: () => void;
}

const defaultCompanyPreference: IGeneralMatchingPreference = {
  type: [],
  size: [],
  revenue: [],
  financialStage: [],
  compensationAndBenefits: [],
  techStack: [],
  otherTechStack: [],
  mission: [],
  diversityEquityInclusionBelonging: [],
  culture: [],
  assessments: [],
  organizationStructure: [],
  schedule: [],
  location: [],
};

const defaultJobPreferenceInfo: IJobPreferenceInfo = {
  jobType: '',
  jobCompensationType: '',
  minimumBaseCompensation: {},
  lowEndCompensation: {},
  highEndCompensation: {},
  lastCompensationPackage: { targetBonus: 0, actualBonus: 0 },
  retirementPlanPreference: { has: false },
  medicalHealthcareBenefitPlanPreference: { has: false },
  dentalCareBenefitPlanPreference: { has: false },
  visionCareBenefitPlanPreference: { has: false },
  vacationSickDaysHolidayPTOPreference: {
    vacations: 0,
    sickDays: 0,
    holidays: 0,
  },
  spendingAllowancePreference: { has: false },
  tuitionBenefitPreference: { has: false },
  companyVehiclePreference: {
    hasCompanyVehicle: false,
    hasPersonalUseCompanyVehicle: false,
    hasVehicleAllowance: false,
  },
  otherBenefitsAndPerks: '',
  nonNegotiableGeneralPreference: { ...defaultCompanyPreference },
  negotiableGeneralPreference: { ...defaultCompanyPreference },
};

const CandidateJobPreferenceSection: React.FC<ICandidateJobPreferenceSectionProps> =
  (props) => {
    const [jobPreferenceInfo, setJobPreferenceInfo] = useState(
      props.jobPreferenceInfo || defaultJobPreferenceInfo,
    );

    const Divider = () => (
      <Box
        sx={{ width: '700px', borderBottom: '1px solid grey', my: '40px' }}
      />
    );

    const handleCompensationTypeChange = (compensationType: string) => {
      setJobPreferenceInfo({
        ...jobPreferenceInfo,
        jobCompensationType: compensationType,
      });
    };

    const handleCandidateJobTypeChange = (jobType: string) => {
      setJobPreferenceInfo({
        ...jobPreferenceInfo,
        jobType: jobType,
      });
    };

    const handleMinimumBaseCompensationChange = (
      minimumBaseCompensation: ICompensation,
    ) => {
      setJobPreferenceInfo({
        ...jobPreferenceInfo,
        minimumBaseCompensation: { ...minimumBaseCompensation },
      });
    };

    const handleHighEndCompensationChange = (
      highEndCompensation: ICompensation,
    ) => {
      setJobPreferenceInfo({
        ...jobPreferenceInfo,
        highEndCompensation: { ...highEndCompensation },
      });
    };

    const handleLowEndCompensationChange = (
      lowEndCompensation: ICompensation,
    ) => {
      setJobPreferenceInfo({
        ...jobPreferenceInfo,
        lowEndCompensation: { ...lowEndCompensation },
      });
    };

    const handleLastCompensationPackageChange = (
      lastCompensationPackage: ICompensationPackage,
    ) => {
      setJobPreferenceInfo({
        ...jobPreferenceInfo,
        lastCompensationPackage: { ...lastCompensationPackage },
      });
    };

    const handleRetirementPlanPreferenceUpdate = (
      retirementPlanPreference: IRetirementPlanPreference,
    ) => {
      setJobPreferenceInfo({
        ...jobPreferenceInfo,
        retirementPlanPreference: { ...retirementPlanPreference },
      });
    };

    return (
      <Box
        sx={{
          mt: '60px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}>
        <Box
          sx={{
            typography: 'h4',
            width: '80%',

            textAlign: 'center',
            paddingBottom: '60px',
            borderBottom: '1px solid #9C9C9C',
          }}>
          Job Preferences
        </Box>
        <form
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
            }
          }}
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}>
          <Box
            sx={{
              mt: '50px',
              width: '500px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <CandidateJobTypeSelection
              jobType={jobPreferenceInfo.jobType}
              handleCandidateJobTypeChange={handleCandidateJobTypeChange}
            />
            <Divider />
            <CandidateJobCompensationTypeSelection
              compensationType={jobPreferenceInfo.jobCompensationType}
              handleCompensationTypeChange={handleCompensationTypeChange}
            />
            <Divider />
            <CandidateMinimumBaseCompensationInput
              minimumBaseCompensation={
                jobPreferenceInfo.minimumBaseCompensation
              }
              handleMinimumBaseCompensationChange={
                handleMinimumBaseCompensationChange
              }
            />
            <Divider />
            <CandidateLowEndHighEndCompensationInput
              highEndCompensation={jobPreferenceInfo.highEndCompensation}
              lowEndCompensation={jobPreferenceInfo.lowEndCompensation}
              handleHighEndCompensationChange={handleHighEndCompensationChange}
              handleLowEndCompensationChange={handleLowEndCompensationChange}
            />
            <Divider />

            <CandidatePreviousCompensationInput
              lastCompensationPackage={
                jobPreferenceInfo.lastCompensationPackage
              }
              handleLastCompensationPackageChange={
                handleLastCompensationPackageChange
              }
            />
            <Divider />

            <CandidateRetirementPlanSelection
              retirementPlanPreference={
                jobPreferenceInfo.retirementPlanPreference
              }
              handleRetirementPlanPreferenceUpdate={
                handleRetirementPlanPreferenceUpdate
              }
            />
          </Box>
          <Button
            className="button"
            sx={{
              typography: 'body1',
              textTransform: 'none',
              color: 'white',
              mt: '60px',
            }}
            variant="contained"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              const formEle = e.currentTarget.parentElement as HTMLFormElement;
              if (formEle.reportValidity()) {
                props.handleSaveClick(jobPreferenceInfo);
              }
            }}>
            Save
          </Button>

          <Button
            className="button"
            onClick={props.handleBackClick}
            variant="outlined"
            sx={{
              typography: 'body1',
              textTransform: 'none',
              mb: '100px',
              mt: 2,
            }}>
            Back
          </Button>
        </form>
      </Box>
    );
  };

export default CandidateJobPreferenceSection;
